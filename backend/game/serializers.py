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

class CollectScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CollectScore
        exclude = ('given_by', )

    def create(self,validated_data):
        request = self.context.get('request', None)
        user = request.user
        game = validated_data['game']
        data = models.CollectScore.objects.filter(user=validated_data['user'], game=game,round=validated_data['round'])
        collect_score = models.CollectScore.objects.create(**validated_data)
        if data.exists():
            print(game.players.all().count())
            if game.players.all().count() ==  data.count():
                print('#########')
                dic = {}
                for d in data:
                    if d.score in dic:
                        dic[d.score] += 1
                    else:
                        dic[d.score] = 1
                score = 0
                for key,value in dic.items():
                    if score < value:
                        score = key
                score_create = models.CollectScore.objects.filter(score=score,
                game=game,round=validated_data['round'])
                if score_create.exists():
                    models.GameScore.objects.create(**score_create.values()[0])
        return collect_score
        
                
        