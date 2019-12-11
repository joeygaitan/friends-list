from django.conf import settings
from django.db import models

# Create your models here.

class StatuQuerySet(models.QuerySet):
    pass

class StatusManager(models.Manager):
    def get_queryset(self):
        return StatuQuerySet(self.model, using=self._db)

class Status(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT)
    content = models.TextField(null=True, blank=True)

    objects = StatusManager()

    def __str__(self):
        return str(self.content)