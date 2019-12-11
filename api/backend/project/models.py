from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=15)
    password = models.CharField(max_length=8)

class Post(models.Model):
    title = models.CharField(max_length=30)
    body = models.CharField(max_length=100)
    # time = models.parse_date
    username = User()



