# Generated by Django 3.1.5 on 2021-02-02 14:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_auto_20210123_1853'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='image_idImage',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='postalCode',
            new_name='postalcode',
        ),
    ]
