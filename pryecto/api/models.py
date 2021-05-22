from django.db import models
import uuid
import string
import random


# Create your models here.


#crea la tabla restaurant
class Restaurant(models.Model):
    objects = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=45,unique=True)
    city = models.CharField(max_length=50, default="",null=False)
    postalcode = models.CharField(max_length=5, default="")
    adress = models.CharField(max_length=50, unique=True,)
    phone = models.IntegerField(null=False,default=0)
    description = models.TextField(blank=True)
    imagen = models.ImageField( upload_to='imagenes/',null=True,blank=True)
    password = models.CharField( max_length=50)
#crea la tabla user
class User(models.Model):
    objects = None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20,default="")
    surname = models.CharField(max_length=50, null=True)
    email = models.EmailField(max_length=45,unique=True)
    adress = models.CharField(max_length=50)
    postalcode = models.PositiveIntegerField(default=00000)
    city = models.CharField(max_length=50, default="")
    phone = models.IntegerField(null=False,default=0)
    birthday = models.DateField(null=True)
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="imagenes",null=True,blank=True)
   
    
#crea la tabla rider
class Rider(models.Model):
    objects = None
    userrider= models.OneToOneField(User, on_delete=models.CASCADE,blank=True,null=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type_vehicle = models.CharField(max_length = 45,default="")
    libre = models.BooleanField(default=False)  

#crea la tabla product
class Product(models.Model):
    objects=None
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    name = models.CharField(max_length=45,default="")
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    imagen = models.ImageField( upload_to='imagenes/product',null=True,blank=True)
    id_restaurant = models.ForeignKey(Restaurant,related_name="products", on_delete=models.CASCADE, blank=True, null=False)

        
# crea la tabla pedido
class Pedido(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    user = models.ForeignKey(User, related_name="pedidouser", on_delete=models.CASCADE,blank=True,null=True) 
    finalizado = models.BooleanField(default=False) 
     
class Pedidos(models.Model):
    objects= None
    class EligeEstado(models.TextChoices):
        PREPARADO = 'preparado'
        ENTREGADO = 'entregado'
        COCINANDO = 'en concina'
        RECIBIDO = 'recibida la solicitud de pedido'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    num_pedidos = models.PositiveIntegerField(default=0,unique=True)
    total_price = models.DecimalField(max_digits=5, decimal_places=2)
    entregado = models.BooleanField(default=False)
    estado = models.CharField(max_length=45, choices= EligeEstado.choices, default=EligeEstado.COCINANDO)
    pagado = models.BooleanField(default=False)
    restaurants = models.ForeignKey(Restaurant,related_name="pedidosrestaurant", on_delete=models.CASCADE,blank=True,null=True)
    rider = models.OneToOneField(Rider, on_delete=models.CASCADE,related_name="pedidosrider", blank=True, null=True)
    id_pedido = models.ForeignKey(Pedido, related_name="pedidos", on_delete=models.CASCADE,blank=True,null=True)
    products = models.ManyToManyField(Product,related_name="products",blank=True,null=True)
    



    
