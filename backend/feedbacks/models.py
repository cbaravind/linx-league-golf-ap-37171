from django.db import models
from django.conf import settings

from utils.models import BaseModel


class Feedback(BaseModel):
    from_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    subject = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    message = models.TextField(
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "Feedback"
        verbose_name_plural = "Feedbacks"

    def __str__(self):
        return f"{self.from_user}"
