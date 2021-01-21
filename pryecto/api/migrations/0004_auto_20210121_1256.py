# Generated by Django 3.1.5 on 2021-01-21 11:56

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210118_1711'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id_image', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id_order', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('entregado', models.BooleanField(default=False)),
                ('pagado', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id_pedido', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=45)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('image_idImage', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.image')),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id_restaurant', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('adress', models.CharField(max_length=50, unique=True)),
                ('preparado', models.BooleanField(default=False)),
                ('image_idImage', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.image')),
            ],
        ),
        migrations.CreateModel(
            name='Rider',
            fields=[
                ('id_rider', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.AddField(
            model_name='user',
            name='id_user',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AddField(
            model_name='user',
            name='surname',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=45, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=45),
        ),
        migrations.AlterField(
            model_name='user',
            name='user',
            field=models.CharField(max_length=20),
        ),
        migrations.CreateModel(
            name='Restaurant_has_Rider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Restaurant_idRestaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.restaurant')),
                ('Rider_idRider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.rider')),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant_has_Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Pedido_idOrder', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.pedido')),
                ('Restaurant_Image_idImg', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.image')),
                ('Restaurant_idRestaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.restaurant')),
            ],
        ),
        migrations.AddField(
            model_name='restaurant',
            name='riders',
            field=models.ManyToManyField(through='api.Restaurant_has_Rider', to='api.Rider'),
        ),
        migrations.AddField(
            model_name='pedido',
            name='restaurants',
            field=models.ManyToManyField(through='api.Restaurant_has_Pedido', to='api.Restaurant'),
        ),
        migrations.AddField(
            model_name='user',
            name='restaurant_idRestaurant',
            field=models.ForeignKey(default=django.utils.timezone.now, on_delete=django.db.models.deletion.CASCADE, to='api.restaurant'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='rider_idRider',
            field=models.ForeignKey(default=django.utils.timezone.now, on_delete=django.db.models.deletion.CASCADE, to='api.rider'),
            preserve_default=False,
        ),
    ]
