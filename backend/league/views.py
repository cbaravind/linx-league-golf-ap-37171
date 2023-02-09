from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.authentication import TokenAuthentication
from league import serializers,models
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


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


class GetLeagueGolfCourse(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        try:
            league = models.League.objects.get(id=request.data['league_id'])
            serializer = serializers.GolfCourseSerializer(league.golf_course.all(),many=True)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response({'msg':e},status=status.HTTP_400_BAD_REQUEST)