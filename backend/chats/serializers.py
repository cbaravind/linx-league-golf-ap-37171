from django.contrib.auth import get_user_model

from rest_framework import serializers


from .models import Chat
from home.api.v1.serializers import TokenSerializer, UserProfileSerializer
from users.models import Profile


User = get_user_model()


class ChatUserSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "email", "username", "profile"]

    def get_profile(self, obj):
        try:
            query = Profile.objects.get(user=obj)
        except Profile.DoesNotExist:
            return None
        return UserProfileSerializer(query).data


class CreateChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = "__all__"


class GetChatSerializer(serializers.ModelSerializer):
    sender = ChatUserSerializer(read_only=True)
    receiver = ChatUserSerializer(read_only=True)

    class Meta:
        model = Chat
        fields = "__all__"
