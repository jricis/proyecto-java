# Generated by Django 3.1.5 on 2021-02-11 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20210211_1841'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='email',
            field=models.EmailField(max_length=45, unique=True),
        ),
    ]
