from django.db import models
import uuid
import string
import random

# Create your models here.


class Rider(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type_vehicle = models.CharField(max_length = 45,default="")

class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.URLField(max_length = 200)

class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30)
    adress = models.CharField(max_length=50, unique=True)
    phone = models.IntegerField(null=False,default=0)
    description = models.TextField(blank=True)
    preparado  = models.BooleanField(default=False)
    riders = models.ManyToManyField(Rider)
    image_idImage = models.ForeignKey(Image, on_delete=models.CASCADE)

class User(models.Model):
    objects = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(max_length=20)
    name = models.CharField(max_length=20,default="")
    surname = models.CharField(max_length=50, null=True)
    email = models.EmailField(max_length=45,unique=True)
    postalCode = models.PositiveIntegerField(default=00000)
    city = models.CharField(max_length=50, default="")
    phone = models.IntegerField(null=False,default=0)
    birthday = models.DateField(null=True)
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    Rider = models.ForeignKey(Rider, on_delete=models.CASCADE, blank=True, null=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, blank=True, null=True)



class Pedido(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    name = models.CharField(max_length=45,default="")
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    image_idImage = models.ForeignKey(Image, on_delete=models.CASCADE, blank=True, null=True)
    restaurants = models.ManyToManyField(Restaurant)

class Order(models.Model):
    class EligeEstado(models.TextChoices):
        PREPARADO = 'preparado'
        ENTREGADO = 'entregado'
        COCINANDO = 'en concina'
        RECIBIDO = 'recibida la solicitud de pedido'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    num_order = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=5, decimal_places=2)
    entregado = models.BooleanField(default=False)
    estado = models.CharField(max_length=45, choices= EligeEstado.choices, default=EligeEstado.RECIBIDO)
    pagado = models.BooleanField(default=False)

    


