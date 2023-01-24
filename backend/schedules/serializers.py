from django.contrib.auth import get_user_model

from rest_framework import serializers

from users.models import Profile
from home.api.v1.serializers import UserProfileSerializer
from .models import League


User = get_user_model()


class PlayersSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "name",
            "first_name",
            "last_name",
            "profile",
        ]

    def get_profile(self, obj):
        try:
            query = Profile.objects.get(user=obj)
        except Profile.DoesNotExist:
            return None
        return UserProfileSerializer(query).data


class CreateLeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = "__all__"


class GetLeagueSerializer(serializers.ModelSerializer):
    players = PlayersSerializer(many=True)

    class Meta:
        model = League
        fields = "__all__"
