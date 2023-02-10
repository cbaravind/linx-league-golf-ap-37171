from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    UserProfileViewSet,
    UserProfileAPIView,
        SignupViewSet,
    LoginViewSet,

)

router = DefaultRouter()
router.register("profile", UserProfileViewSet, basename="profile")
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")


urlpatterns = [
    path("", include(router.urls)),
    path("get-user-profile/", UserProfileAPIView.as_view()),
]
