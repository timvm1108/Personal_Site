from django.db import models

# Create your models here.

class Contact(models.Model):
    id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.CharField(max_length=500)

class Skill(models.Model):
    id = models.BigAutoField(primary_key=True, editable=False, unique=True)
    skill = models.CharField(max_length=100)
    description = models.CharField(max_length=500)