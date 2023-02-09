from django.urls import path,include
from rest_framework import routers
from game import views

router = routers.DefaultRouter()
router.register('game', views.GameModelViewSet,basename='game')
router.register('game-score', views.GameScoreModelViewSet,basename='game-score')

urlpatterns = [
    path('', include(router.urls))

]