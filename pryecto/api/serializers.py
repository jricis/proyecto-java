from rest_framework import serializers
from .models import User
from .models import Restaurant
from .models import Product
from .models import Image
from .models import Pedido

class UserSeralizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','surname','email','postalcode','city','phone','birthday','password','created_at','image','rider')

class RestaurantSeralizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id','name','adress','phone','description','image','id_product')

class ProductSerializer(serializers.HyperlinkedModelSerializer):    
    class Meta:
        model = Product
        fields = ('id','name','price','description','image')
        
class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Image
        fields = ('id','url')
    
class PedidoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pedido
        fields = ('id','num_pedido','total_price','entregado','estado','pagado','restaurants','user','rider')

