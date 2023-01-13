from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import InviteUserViewSet

router = DefaultRouter()
router.register("invites", InviteUserViewSet, basename="invites")

urlpatterns = [
    path("", include(router.urls)),
]
