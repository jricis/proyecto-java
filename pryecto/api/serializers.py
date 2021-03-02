from rest_framework import serializers
from .models import User
from .models import Restaurant
from .models import Product
from .models import Pedido


class PedidoSerializer(serializers.HyperlinkedModelSerializer):
    restaurants= serializers.PrimaryKeyRelatedField(queryset=Restaurant.objects.all(),many=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(),many=True)
    class Meta:
        model = Pedido
        fields = ('id','num_pedido','total_price','entregado','estado','pagado','restaurants','user')
        


class UserSeralizer(serializers.HyperlinkedModelSerializer):
    pedidouser = PedidoSerializer(read_only=True,many=True)
    class Meta:
        model = User
        fields = ('id','name','surname','email','postalcode','city','phone','birthday','password','created_at','rider')

class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
         model = Product
         fields = ('id','name','price','description','imagen','id_restaurant')
   


    


class RestaurantSerializer(serializers.ModelSerializer):
    products =serializers.PrimaryKeyRelatedField(many=True,read_only=True)
    pedidorestaurant = PedidoSerializer(read_only=True,many=True)
    class Meta:
        model = Restaurant
        fields = ('id','name','email','phone','adress','city','postalcode','description','imagen','products','pedidorestaurant')
   
