from django.db import models
import uuid
import string
import random

# Create your models here.

#crea la tabla rider
class Rider(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type_vehicle = models.CharField(max_length = 45,default="")
    libre = models.BooleanField(default=False)

#crea la tabla image
class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    url = models.URLField(max_length = 200)
    

#crea la tabla product
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    name = models.CharField(max_length=45,default="")
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    image = models.ForeignKey(Image, on_delete=models.CASCADE, blank=True, null=True)

#crea la tabla restaurant
class Restaurant(models.Model):
    objects = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30)
    adress = models.CharField(max_length=50, unique=True)
    phone = models.IntegerField(null=False,default=0)
    description = models.TextField(blank=True)
    image = models.ForeignKey(Image, on_delete=models.CASCADE, blank=True, null=True)
    id_product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)
    
#crea la tabla user
class User(models.Model):
    objects = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(max_length=20)
    name = models.CharField(max_length=20,default="")
    surname = models.CharField(max_length=50, null=True)
    email = models.EmailField(max_length=45,unique=True)
    postalcode = models.PositiveIntegerField(default=00000)
    city = models.CharField(max_length=50, default="")
    phone = models.IntegerField(null=False,default=0)
    birthday = models.DateField(null=True)
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    id_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, blank=True, null=True)
    image = models.OneToOneField(Image, on_delete=models.CASCADE, blank=True, null=True)
    rider = models.OneToOneField(Rider, on_delete=models.CASCADE, blank=True, null=True)
    
# crea la tabla pedido
class Pedido(models.Model):
    class EligeEstado(models.TextChoices):
        PREPARADO = 'preparado'
        ENTREGADO = 'entregado'
        COCINANDO = 'en concina'
        RECIBIDO = 'recibida la solicitud de pedido'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    num_pedido = models.PositiveBigIntegerField(default=0)
    total_price = models.DecimalField(max_digits=5, decimal_places=2)
    entregado = models.BooleanField(default=False)
    estado = models.CharField(max_length=45, choices= EligeEstado.choices, default=EligeEstado.RECIBIDO)
    pagado = models.BooleanField(default=False)
    restaurants = models.ManyToManyField(Restaurant)
    user = models.ManyToManyField(User)
    rider = models.OneToOneField(Rider, on_delete=models.CASCADE, blank=True, null=True)


