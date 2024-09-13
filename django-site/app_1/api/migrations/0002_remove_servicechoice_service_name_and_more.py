# Generated by Django 5.1 on 2024-09-04 10:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='servicechoice',
            name='service_name',
        ),
        migrations.AddField(
            model_name='servicechoice',
            name='service',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.service'),
        ),
    ]
