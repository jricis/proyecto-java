# Generated by Django 3.1.5 on 2021-01-23 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20210122_1328'),
    ]

    operations = [
        migrations.AddField(
            model_name='pedido',
            name='user',
            field=models.ManyToManyField(to='api.User'),
        ),
    ]
