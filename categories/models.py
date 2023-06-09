from django.db import models
# Create your models here.


class Category(models.Model):
    category_name = models.TextField(default=None)
    user = models.ForeignKey(
        "jwt_auth.User",
        related_name = "categories",
        on_delete = models.CASCADE,
        default = 1
    )


    def __str__(self):
        return f"{self.user} {self.category_name}"