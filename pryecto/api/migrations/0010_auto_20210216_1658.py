# Generated by Django 3.1.5 on 2021-02-16 15:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20210211_1841'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id_restaurant',
        ),
        migrations.RemoveField(
            model_name='user',
            name='rider',
        ),
        migrations.AlterField(
            model_name='pedido',
            name='restaurants',
            field=models.ManyToManyField(related_name='pedidorestaurant', to='api.Restaurant'),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='rider',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pedidorider', to='api.rider'),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='user',
            field=models.ManyToManyField(related_name='pedidouser', to='api.User'),
        ),
    ]
