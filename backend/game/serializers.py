from rest_framework import serializers
from game import models
from league.serializers import LeagueSerializerGET,GolfCourseSerializer
from home.api.v1.serializers import UserProfileSerializer


class GameSerializerGET(serializers.ModelSerializer):
    league = LeagueSerializerGET()
    golf_course = GolfCourseSerializer()
    players = UserProfileSerializer(many=True)

    class Meta:
        model = models.Game
        exclude = ('user', )
        

class GameSerializerPOST(serializers.ModelSerializer):
    class Meta:
        model = models.Game
        exclude = ('user', )
        