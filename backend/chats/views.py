from rest_framework import viewsets
from drf_spectacular.utils import extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes

from django.db.models import Q
from django.contrib.auth import get_user_model

from .models import Chat
from .serializers import CreateChatSerializer, GetChatSerializer

User = get_user_model()


@extend_schema(
    parameters=[
        OpenApiParameter("user__id", OpenApiTypes.INT, OpenApiParameter.QUERY),
    ]
)
class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        if "user__id" in self.request.query_params:
            user_id = self.request.query_params.get("user__id")
            try:
                user = User.objects.get(pk=user_id)
            except User.DoesNotExist:
                return queryset
            queryset = queryset.filter(Q(sender=user) | Q(receiver=user))
        return queryset

    def get_serializer_class(self):
        if self.request.method in ("PUT", "POST"):
            return CreateChatSerializer
        elif self.request.method == "PATCH":
            return CreateChatSerializer
        else:
            return GetChatSerializer
