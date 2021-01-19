from django.db import models
import string
import random

# Create your models here.
class User(models.Model):
    objects = None
    user = models.CharField(max_length=20,default="")
    email =models.CharField (max_length=45, default="",unique=True)
    password=models.CharField(max_length=45,default="")
    created_at = models.DateTimeField(auto_now_add=True)

  