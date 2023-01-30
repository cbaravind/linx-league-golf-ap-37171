from rest_framework import serializers
from game import models
from league.serializers import LeagueSerializerGET,GolfCourseSerializer


class GameSerializerGET(serializers.ModelSerializer):
    league = LeagueSerializerGET()
    golf_course = GolfCourseSerializer()

    class Meta:
        model = models.Game
        exclude = ('user', )
        

class GameSerializerPOST(serializers.ModelSerializer):
    class Meta:
        model = models.Game
        exclude = ('user', )
        