from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import FeedbackViewSet

app_name = "feedbacks"

router = DefaultRouter()
router.register("data", FeedbackViewSet, basename="feedback")

urlpatterns = [
    path("", include(router.urls)),
]
