from django.db import models
import uuid
import string
import random

# Create your models here.


class Rider(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    type_vehicle = models.CharField

class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    url = models.URLField(max_length = 200)

class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    name = models.CharField(max_length=30)
    adress = models.CharField(max_length=50, unique=True)
    phone = models.IntegerField
    description = models.TextField
    preparado  = models.BooleanField(default=False)
    riders = models.ManyToManyField(Rider)
    image_idImage = models.ForeignKey(Image, on_delete=models.CASCADE)

class User(models.Model):
    objects = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    user = models.CharField(max_length=20)
    surname = models.CharField(max_length=50, null=True)
    email = models.EmailField(max_length=45,unique=True)
    phone = models.IntegerField
    birthday = models.DateField
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    rider_idRider = models.ForeignKey(Rider, models.CASCADE)
    restaurant_idRestaurant = models.ForeignKey(Restaurant, models.CASCADE)



class Pedido(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    name = models.CharField(max_length=45,default="")
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField
    image_idImage = models.ForeignKey(Image, on_delete=models.CASCADE)
    restaurants = models.ManyToManyField(Restaurant)

class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    num_order = models.PositiveIntegerField
    total_price = models.DecimalField(max_digits=5, decimal_places=2)
    entregado = models.BooleanField(default=False)
    estado = models.CharField(max_length=45,default="")
    pagado = models.BooleanField(default=False)



# class Restaurant_has_Rider(models.Model):
#     Restaurant_idRestaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
#     Rider_idRider = models.ForeignKey(Rider, on_delete=models.CASCADE)

# class Restaurant_has_Pedido(models.Model):
#     Restaurant_idRestaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
#     Pedido_idOrder = models.ForeignKey(Pedido, on_delete=models.CASCADE)
#     Restaurant_Image_idImg = models.ForeignKey(Image, on_delete=models.CASCADE)
