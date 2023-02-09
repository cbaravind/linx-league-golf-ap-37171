from django.contrib import admin
from league import models

admin.site.register(models.Season)
admin.site.register(models.GolfCourse)
admin.site.register(models.League)