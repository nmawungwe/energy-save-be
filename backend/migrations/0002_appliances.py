# Generated by Django 3.1.1 on 2020-09-19 17:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appliances',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TVs_num', models.IntegerField(blank=True)),
                ('Decoders_num', models.IntegerField(blank=True)),
                ('SoundSystems_num', models.IntegerField(blank=True)),
                ('Lights_num', models.IntegerField(blank=True)),
                ('Heaters_num', models.IntegerField(blank=True)),
                ('Stoves_num', models.IntegerField(blank=True)),
                ('Fridges_num', models.IntegerField(blank=True)),
                ('Kettles_num', models.IntegerField(blank=True)),
                ('Microwaves_num', models.IntegerField(blank=True)),
                ('Computers_num', models.IntegerField(blank=True)),
                ('Printers_num', models.IntegerField(blank=True)),
                ('Modems_num', models.IntegerField(blank=True)),
                ('ElectricBlanket_num', models.IntegerField(blank=True)),
                ('Phones_num', models.IntegerField(blank=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appliances', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
