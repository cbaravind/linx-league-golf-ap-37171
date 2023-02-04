from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.authentication import TokenAuthentication
from league import serializers,models


class SeasonModelViewSet(viewsets.ModelViewSet):
    queryset = models.Season.objects.all()
    serializer_class = serializers.SeasonSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return (IsAuthenticated(),)
        return (IsAdminUser(),)

class GolfCourseModelViewSet(viewsets.ModelViewSet):
    queryset = models.GolfCourse.objects.all()
    serializer_class = serializers.GolfCourseSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return (IsAuthenticated(),)
        return (IsAdminUser(),)



class LeagueModelViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        return models.League.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.LeagueSerializerGET
        if self.action == 'retrieve':
            return serializers.LeagueSerializerGET
        return serializers.LeagueSerializerPOST

    def get_permissions(self):
        if self.request.method == 'GET':
            return (IsAuthenticated(),)
        return (IsAdminUser(),)

