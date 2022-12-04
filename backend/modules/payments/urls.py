from django.urls import re_path, include, path

from rest_framework.routers import DefaultRouter

from .viewsets import (
    PaymentSheetView,
    GetStripePaymentsView,
    GetPaymentMethodsView,
)

router = DefaultRouter()

urlpatterns = [
    path("", include(router.urls)),
    re_path(r"payment_sheet/?", PaymentSheetView.as_view()),
    re_path(r"get_payments_history/?", GetStripePaymentsView.as_view()),
    re_path(r"get_payments_methods/?", GetPaymentMethodsView.as_view()),
]
