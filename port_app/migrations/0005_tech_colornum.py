# Generated by Django 3.1.3 on 2020-11-17 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('port_app', '0004_auto_20201117_2054'),
    ]

    operations = [
        migrations.AddField(
            model_name='tech',
            name='colorNum',
            field=models.IntegerField(default=0),
        ),
    ]
