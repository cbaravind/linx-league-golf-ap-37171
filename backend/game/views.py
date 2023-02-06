from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.authentication import TokenAuthentication
from game import serializers,models


class GameModelViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        return models.Game.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.GameSerializerGET
        if self.action == 'retrieve':
            return serializers.GameSerializerGET
        return serializers.GameSerializerPOST

    def get_permissions(self):
        return (IsAuthenticated(),)
        
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class GameScoreModelViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        return models.Game.objects.all()

    def get_serializer_class(self):
        return serializers.GameScoreSerializer

    def get_permissions(self):
        return (IsAuthenticated(),)
        
    def perform_create(self, serializer):
        serializer.save(given_by=self.request.user)