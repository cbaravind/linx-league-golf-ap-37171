from rest_framework import viewsets, status
from rest_framework.response import Response

from invite_users.serializers import InviteUserSerializer
from utils import send_html_email


class InviteUserViewSet(viewsets.GenericViewSet):
    serializer_class = InviteUserSerializer

    def create(self, request):
        serializer = InviteUserSerializer(data=request.data)
        base_url = f"{request.scheme}://{request.get_host()}"
        if serializer.is_valid():
            serializer.save()
            to_email = serializer.validated_data["invited_email"]
            # send email
            send_html_email(
                "invite_users/invite.html",
                "You are invited to join BlueDoor app.",
                {"base_url": base_url},
                to_email,
            )
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
