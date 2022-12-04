from rest_framework import serializers


class PaymentResponseSerializer(serializers.Serializer):
    cents = serializers.CharField()
