from rest_framework import serializers

from drf_writable_nested.serializers import WritableNestedModelSerializer

from .models import Friend
from home.api.v1.serializers import UserSerializer


class CreateFriendSerializer(WritableNestedModelSerializer):
    friends = UserSerializer(many=True)

    class Meta:
        model = Friend
        fields = "__all__"


class GetFriendSerializer(serializers.ModelSerializer):
    friends = UserSerializer(many=True)

    class Meta:
        model = Friend
        fields = "__all__"
