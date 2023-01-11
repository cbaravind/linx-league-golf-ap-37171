from django.db import models
from django.conf import settings

from utils.models import BaseModel


class Friend(BaseModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="user_friend",
        blank=True,
        null=True,
    )

    friends = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="friends_of_user",
        blank=True,
    )

    class Meta:
        verbose_name = "Friends"
        verbose_name_plural = "Friends"

    def __str__(self) -> str:
        return f"{self.user}"
