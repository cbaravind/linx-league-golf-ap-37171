from django.urls import path,include
from rest_framework import routers
from game import views

router = routers.DefaultRouter()
router.register('game', views.GameModelViewSet,basename='game')

urlpatterns = [
    path('', include(router.urls))

]