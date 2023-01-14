from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import InviteUserViewSet

app_name = "invite-users"

router = DefaultRouter()
router.register("users", InviteUserViewSet, basename="invites")

urlpatterns = [
    path("", include(router.urls)),
]
