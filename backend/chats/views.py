from rest_framework import viewsets

from .models import Chat
from .serializers import CreateChatSerializer, GetChatSerializer


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    filterset_fields = {
        "sender__id": ["exact"],
        "receiver__id": ["exact"],
    }

    def get_serializer_class(self):
        if self.request.method in ("PUT", "POST"):
            return CreateChatSerializer
        elif self.request.method == "PATCH":
            return CreateChatSerializer
        else:
            return GetChatSerializer
