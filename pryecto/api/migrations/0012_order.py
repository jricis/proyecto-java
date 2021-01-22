# Generated by Django 3.1.5 on 2021-01-22 12:12

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_pedido'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('num_order', models.PositiveIntegerField()),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('entregado', models.BooleanField(default=False)),
                ('estado', models.CharField(default='', max_length=45)),
                ('pagado', models.BooleanField(default=False)),
            ],
        ),
    ]
