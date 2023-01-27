from django.db import models
from users.models import User
from core.utils import get_file_path

class Season(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name

class GolfCourse(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to=get_file_path)
    hole_wise = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    longitude = models.CharField(max_length=255,null=True,blank=True)
    latitude = models.CharField(max_length=255,null=True,blank=True)

class League(models.Model):
    name = models.CharField(max_length=255)
    handicap = models.CharField(max_length=255)
    revenue = models.CharField(max_length=255)
    users_limit = models.IntegerField()
    season = models.ForeignKey(Season,on_delete=models.CASCADE)
    fee = models.FloatField()
    users_joined = models.ManyToManyField(User,null=True)
    golf_course = models.ForeignKey(GolfCourse,on_delete=models.CASCADE)


    def __str__(self) -> str:
        return self.name
    
