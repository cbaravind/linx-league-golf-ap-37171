from rest_framework import serializers


from .models import Chat


class CreateChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = "__all__"


class GetChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = "__all__"
        depth = 1
