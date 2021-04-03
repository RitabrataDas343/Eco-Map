from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class accountholder(models.Model):
    carbon_footprint = models.FloatField(default=0)
    user=models.ForeignKey(User, on_delete=models.CASCADE)