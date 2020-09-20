from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Appliance(models.Model):
    user = models.ForeignKey(User, related_name="appliances", on_delete=models.CASCADE)
    TVs_num = models.CharField(max_length=255, default=0)
    Decoders_num = models.CharField(max_length=255, default=0)
    SoundSystems_num = models.CharField(max_length=255, default=0)
    Lights_num = models.CharField(max_length=255, default=0)
    Heaters_num = models.CharField(max_length=255, default=0)
    Stoves_num = models.CharField(max_length=255, default=0)
    Fridges_num = models.CharField(max_length=255, default=0)
    Kettles_num = models.CharField(max_length=255, default=0)
    Microwaves_num = models.CharField(max_length=255, default=0)
    Computers_num = models.CharField(max_length=255, default=0)
    Printers_num = models.CharField(max_length=255, default=0)
    Modems_num = models.CharField(max_length=255, default=0)
    ElectricBlanket_num = models.CharField(max_length=255, default=0)
    Phones_num = models.CharField(max_length=255, default=0)



