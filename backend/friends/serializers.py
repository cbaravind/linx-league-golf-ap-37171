from rest_framework import serializers

from drf_writable_nested.serializers import WritableNestedModelSerializer

from .models import Friend
from home.api.v1.serializers import UserSerializer


class CreateFriendSerializer(WritableNestedModelSerializer):
    class Meta:
        model = Friend
        fields = "__all__"


class PatchFriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = "__all__"

    def update(self, instance, validated_data):
        print(validated_data)
        for friend in validated_data.get("friends"):
            instance.friends.add(friend)
        instance.save()
        return instance


class GetFriendSerializer(serializers.ModelSerializer):
    friends = UserSerializer(many=True)

    class Meta:
        model = Friend
        fields = "__all__"
