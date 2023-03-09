from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from game import serializers,models


class GameModelViewSet(viewsets.ModelViewSet):
    
    def get_queryset(self):
        return models.Game.objects.filter(players__user = self.request.user)
    
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
        if self.action == 'list':
            return serializers.GameScoreSerializer
        if self.action == 'retrieve':
            return serializers.GameScoreSerializer
        return serializers.GameScoreSerializerList
    
    def get_permissions(self):
        return (IsAuthenticated(),)
        
    def perform_create(self, serializer):
        serializer.save(given_by=self.request.user)



class GetGameStats(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        try:
            player_id = request.data['player_id']
            golf_course = request.data['course_id']
            games = models.Game.objects.filter(players__id__in=[player_id],
            golf_course__id=golf_course)
            data = []
            for game in games:
                game_score = models.GameScore.objects.filter(game=game)
                serializer = serializers.GameScoreSerializer(game_score,many=True)
                data.append(serializer.data)
            return Response(data,status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response({'msg':e},status=status.HTTP_400_BAD_REQUEST)

class CollectScoreModelViewSet(viewsets.ModelViewSet):
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['game__id']
    filterset_fields = ['game__id']
    
    def get_queryset(self):
        return models.CollectScore.objects.all()

    def get_serializer_class(self):
        return serializers.CollectScoreSerializer

    def get_permissions(self):
        return (IsAuthenticated(),)
        
    def perform_create(self, serializer):
        serializer.save(given_by=self.request.user)