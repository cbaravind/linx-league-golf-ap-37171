from django.db import models
from django.conf import settings

from utils.models import BaseModel


class League(BaseModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        blank=True,
        null=True,
        related_name="player_who_is_scheduling",
        on_delete=models.CASCADE,
    )
    when = models.DateTimeField(
        blank=True,
        null=True,
    )
    players = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        blank=True,
        related_name="players_added_as_friends",
    )
    course_name = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    city = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    course_address = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "League"
        verbose_name_plural = "Leagues"

    def __str__(self) -> str:
        return f"Scheduler: {self.user} | Date and time: {self.when}"
