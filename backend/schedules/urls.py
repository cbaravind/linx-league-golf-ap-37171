from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import LeagueViewSet

app_name = "schedules"

router = DefaultRouter()
router.register("leagues", LeagueViewSet, basename="leagues")

urlpatterns = [
    path("", include(router.urls)),
]
