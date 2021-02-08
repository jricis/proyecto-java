# Generated by Django 3.1.5 on 2021-02-03 16:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_remove_restaurant_preparado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.image'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='riders',
            field=models.ManyToManyField(blank=True, null=True, to='api.Rider'),
        ),
    ]
