from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from users.forms import UserChangeForm, UserCreationForm
from users.models import Profile

User = get_user_model()


class ProfileAdmin(admin.StackedInline):
    search_fields = ["user__name", "user__email"]
    list_filter = (
        "is_individual",
        "is_organisation",
        "is_anyone",
    )
    model = Profile
    max_num = 1
    can_delete = False


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("name",)}),) + auth_admin.UserAdmin.fieldsets
    list_display = ["username", "name", "is_superuser"]
    search_fields = ["name"]
    inlines = [ProfileAdmin]
