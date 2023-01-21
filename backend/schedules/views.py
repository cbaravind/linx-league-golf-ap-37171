from rest_framework import viewsets


from .models import League
from .serializers import CreateLeagueSerializer, GetLeagueSerializer


class LeagueViewSet(viewsets.ModelViewSet):
    queryset = League.objects.all()
    filterset_fields = {
        "user__id": ["exact"],
        "when": ["lte", "gte", "gt", "lt", "range", "exact"],
    }

    def get_serializer_class(self):
        if self.request.method in ("PUT", "POST", "PATCH"):
            return CreateLeagueSerializer
        else:
            return GetLeagueSerializer
