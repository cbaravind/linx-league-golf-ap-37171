from rest_framework import serializers

from .models import InviteFriend


class InviteUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InviteFriend
        fields = "__all__"
