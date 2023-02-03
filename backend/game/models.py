from django.db import models
from league.models import League, GolfCourse
from users.models import Profile, User


class Game(models.Model):
    round_date = models.DateField()
    round_time = models.TimeField()
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    golf_course = models.ForeignKey(GolfCourse, on_delete=models.CASCADE)
    players = models.ManyToManyField(Profile, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
