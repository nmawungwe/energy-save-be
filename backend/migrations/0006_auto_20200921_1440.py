# Generated by Django 3.1.1 on 2020-09-21 12:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20200920_2055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appliance',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appliances', to=settings.AUTH_USER_MODEL, unique=True),
        ),
    ]