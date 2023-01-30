from rest_framework import serializers
from league import models


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Season
        fields = '__all__'
        

class GolfCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GolfCourse
        fields = '__all__'

class LeagueSerializerPOST(serializers.ModelSerializer):
    class Meta:
        model = models.League
        fields = '__all__'

class LeagueSerializerGET(serializers.ModelSerializer):
    season = SeasonSerializer()
    golf_course = GolfCourseSerializer(many=True)

    class Meta:
        model = models.League
        fields = '__all__'


