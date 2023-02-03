from django.db import models
from django.conf import settings

from utils.models import BaseModel


class Chat(BaseModel):
    room = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="chat_sender",
    )
    receiver = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="chat_receiver",
    )
    meta_data = models.TextField(
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "Chats"
        verbose_name_plural = "Chats"

    def __str__(self):
        return f"{self.sender} | {self.receiver}"
