# Generated by Django 3.1.5 on 2021-01-22 12:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_user_restaurant_idrestaurant'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='rider_idRider',
            new_name='Rider',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='restaurant_idRestaurant',
            new_name='restaurant',
        ),
    ]
