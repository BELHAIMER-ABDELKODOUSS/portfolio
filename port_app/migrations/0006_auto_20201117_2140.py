# Generated by Django 3.1.3 on 2020-11-17 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('port_app', '0005_tech_colornum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='tech',
            field=models.ManyToManyField(to='port_app.Tech'),
        ),
    ]