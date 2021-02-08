# Generated by Django 3.1.5 on 2021-02-08 16:07

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=45)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Rider',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('type_vehicle', models.CharField(default='', max_length=45)),
                ('libre', models.BooleanField(default=False)),
            ],
        ),
        migrations.AddField(
            model_name='image',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='imagenes/'),
        ),
        migrations.AddField(
            model_name='user',
            name='birthday',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='city',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='user',
            name='image',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.image'),
        ),
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='postalcode',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='image',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('adress', models.CharField(max_length=50, unique=True)),
                ('phone', models.IntegerField(default=0)),
                ('description', models.TextField(blank=True)),
                ('id_product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.product')),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.image')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='id_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.image'),
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('num_pedido', models.PositiveBigIntegerField(default=0)),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('entregado', models.BooleanField(default=False)),
                ('estado', models.CharField(choices=[('preparado', 'Preparado'), ('entregado', 'Entregado'), ('en concina', 'Cocinando'), ('recibida la solicitud de pedido', 'Recibido')], default='recibida la solicitud de pedido', max_length=45)),
                ('pagado', models.BooleanField(default=False)),
                ('restaurants', models.ManyToManyField(to='api.Restaurant')),
                ('rider', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.rider')),
                ('user', models.ManyToManyField(to='api.User')),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='id_restaurant',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.restaurant'),
        ),
        migrations.AddField(
            model_name='user',
            name='rider',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.rider'),
        ),
    ]
