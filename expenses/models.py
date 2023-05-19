from django.db import models

# Create your models here.

class Expense(models.Model):
    amount = models.IntegerField(default=None)
    title = models.TextField(max_length=100, default=None)
    description = models.TextField(max_length=100, default=None)
    user = models.ForeignKey(
        "jwt_auth.User",
        related_name = "expenses",
        on_delete = models.CASCADE,
        default = 1
    )
    category = models.ForeignKey(
        "categories.Category",
        related_name = "expenses",
        on_delete = models.CASCADE,
        default = 1
    )

def __str__(self):
    return f'{self.user} {self.title} ({self.amount})'