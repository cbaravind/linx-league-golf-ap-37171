import uuid

from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.conf import settings


def _generate_file_name(filename):
    extension = filename.split(".")[-1]
    return f"{uuid.uuid4()}.{extension}"


def generate_file_name(instance, filename):  # pylint: disable=unused-argument
    return f"add/assets/{_generate_file_name(filename)}"


def send_html_email(template_name, subject, context, to_email):
    html_message = render_to_string(
        template_name,
        context,
    )
    message = EmailMessage(
        subject, html_message, settings.DEFAULT_FROM_EMAIL, [to_email]
    )
    message.content_subtype = "html"
    message.send()
