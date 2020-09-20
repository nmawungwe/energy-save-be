from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Appliance(models.Model):
    user = models.ForeignKey(User, related_name="appliances", on_delete=models.CASCADE)
    TVs_num = models.IntegerField(blank = True)
    Decoders_num = models.IntegerField(blank = True)
    SoundSystems_num = models.IntegerField(blank = True)
    Lights_num = models.IntegerField(blank = True)
    Heaters_num = models.IntegerField(blank = True)
    Stoves_num = models.IntegerField(blank = True)
    Fridges_num = models.IntegerField(blank = True)
    Kettles_num = models.IntegerField(blank = True)
    Microwaves_num = models.IntegerField(blank = True)
    Computers_num = models.IntegerField(blank = True)
    Printers_num = models.IntegerField(blank = True)
    Modems_num = models.IntegerField(blank = True)
    ElectricBlanket_num = models.IntegerField(blank = True)
    Phones_num = models.IntegerField(blank = True)



