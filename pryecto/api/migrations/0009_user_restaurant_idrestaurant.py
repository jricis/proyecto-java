# Generated by Django 3.1.5 on 2021-01-22 12:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_user_rider_idrider'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='restaurant_idRestaurant',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.restaurant'),
        ),
    ]