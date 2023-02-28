from rest_framework import serializers
from game import models
from league.serializers import LeagueSerializerGET,GolfCourseSerializer,SeasonSerializer
from home.api.v1.serializers import UserProfileSerializer


class GameSerializerGET(serializers.ModelSerializer):
    league = LeagueSerializerGET()
    season = SeasonSerializer()
    golf_course = GolfCourseSerializer()
    players = UserProfileSerializer(many=True)

    class Meta:
        model = models.Game
        exclude = ('user', )
    

class GameSerializerPOST(serializers.ModelSerializer):
    class Meta:
        model = models.Game
        exclude = ('user', )
    
        

class GameScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GameScore
        fields = '__all__'
        
class GameScoreSerializerList(serializers.Serializer):
     data = serializers.ListField(child=GameScoreSerializer())

     def create(self,validated_data):
        request = self.context.get('request', None)
        user = request.user
        if 'data' in validated_data:
            validated_data = dict(validated_data)
            for data in validated_data['data']:
                data_ = (dict(data))
                game = data_['game']
                data_['game'] = game.id
                user_ = data_['user']
                data_['user'] = user_.id
                data_['given_by'] = user.id
                serializer = GameScoreSerializer(data=data_)
                if serializer.is_valid():
                    serializer.save()
                else:
                    raise serializers.ValidationError(serializer.errors)
        res = serializers.ValidationError({'message':'Successfully created'})
        res.status_code = 201
        raise res