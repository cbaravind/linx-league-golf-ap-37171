from django.urls import path,include
from rest_framework import routers
from league import views

router = routers.DefaultRouter()
router.register('season', views.SeasonModelViewSet,basename='season')
router.register('golf-course', views.GolfCourseModelViewSet,basename='golf-course')
router.register('leagues', views.LeagueModelViewSet,basename='leagues')

urlpatterns = [
    path('', include(router.urls)),
    path('league-golf-course/',views.GetLeagueGolfCourse.as_view())

]