from django.db import models
from league.models import League, GolfCourse,Season
from users.models import Profile, User
from django.contrib.postgres.fields import JSONField


class Game(models.Model):
    round_date = models.DateField()
    round_time = models.TimeField()
    league = models.ForeignKey(League, on_delete=models.CASCADE,null=True)
    season = models.ForeignKey(Season, on_delete=models.CASCADE,null=True)
    golf_course = models.ForeignKey(GolfCourse, on_delete=models.CASCADE)
    players = models.ManyToManyField(Profile, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class GameScore(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    score = models.FloatField()
    hole = models.CharField(max_length=255, null=True)
    putt = models.FloatField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=255, null=True,default='Playing')
    given_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="user_given_by",
        null=True,
    )
    fir = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
    score_data = JSONField(null=True)

