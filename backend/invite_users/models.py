from email import message
from django.db import models
from django.conf import settings

from utils.models import BaseModel


class InviteFriend(BaseModel):
    from_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="user_invited_friend",
    )
    subject = models.CharField(
        max_length=255,
    )
    message = models.TextField()
    invited_email = models.EmailField()

    class Meta:
        verbose_name = "Invite Friend"
        verbose_name_plural = "Invite Friends"

    def __str__(self):
        return f"{self.from_user}"
