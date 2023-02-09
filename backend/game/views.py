from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
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
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['game__id']
    filterset_fields = ['game__id']
    
    def get_queryset(self):
        return models.GameScore.objects.all()

    def get_serializer_class(self):
        return serializers.GameScoreSerializer

    def get_permissions(self):
        return (IsAuthenticated(),)
        
    def perform_create(self, serializer):
        serializer.save(given_by=self.request.user)