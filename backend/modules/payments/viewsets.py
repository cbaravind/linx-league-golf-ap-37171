from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from rest_framework import authentication, permissions, status
from django.contrib.auth.models import User


import stripe

from .services.StripeService import StripeService
from .models import StripeUserProfile
from .serializers import PaymentResponseSerializer


class PaymentSheetView(APIView):
    @swagger_auto_schema(
        responses={status.HTTP_201_CREATED: PaymentResponseSerializer},
        operation_description="To get payment intent, ephemeral id and customer id of Stripe",
    )
    def post(self, request, *args, **kwargs):
        user = request.user
        try:
            stripe_profile = user.stripe_profile
        except Exception as e:
            customer = stripe.Customer.create(email=user.email)
            stripe_profile = StripeUserProfile.objects.create(
                user=user, stripe_cus_id=customer["id"]
            )
        try:
            if not stripe_profile.stripe_cus_id:
                customer = stripe.Customer.create(email=user.email)
                stripe_cus_id = customer["id"]
                stripe_profile.stripe_cus_id = stripe_cus_id
                stripe_profile.save()
            else:
                stripe_cus_id = stripe_profile.stripe_cus_id
            cents = request.data.get("cents", 100)
            response = StripeService.create_payment_intent_sheet(stripe_cus_id, cents)
            return Response(response, status=status.HTTP_200_OK)
        except stripe.error.StripeError as e:
            return Response(
                {"error": f"{e}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class GetStripePaymentsView(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        stripe_profile = user.stripe_profile
        if not stripe_profile.stripe_cus_id:
            stripe_cus_id = None
        else:
            stripe_cus_id = stripe_profile.stripe_cus_id
        history = StripeService.get_payments_history(stripe_cus_id)
        response = {"success": True, "data": history}
        return Response(response, status=status.HTTP_200_OK)


class GetPaymentMethodsView(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        stripe_profile = user.stripe_profile
        if not stripe_profile.stripe_cus_id:
            stripe_cus_id = None
        else:
            stripe_cus_id = stripe_profile.stripe_cus_id
        history = StripeService.get_payments_methods(stripe_cus_id)
        response = {"success": True, "data": history}
        return Response(response, status=status.HTTP_200_OK)
