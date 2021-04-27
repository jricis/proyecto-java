from rest_framework import serializers
from .models import User
from .models import Restaurant
from .models import Product
from .models import Pedido
from .models import Pedidos
from .models import Rider


class PedidosSerializer(serializers.HyperlinkedModelSerializer):
    restaurants= serializers.PrimaryKeyRelatedField(queryset=Restaurant.objects.all())
    id_pedido =serializers.PrimaryKeyRelatedField(queryset=Pedido.objects.all())
    products = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(),many=True)
    class Meta:
        model = Pedidos
        fields = ('id','num_pedidos','total_price','entregado','estado','pagado','restaurants','id_pedido','products')
        
class PedidoSerializer(serializers.HyperlinkedModelSerializer):
    pedidos=PedidosSerializer(read_only=True,many=True)
    user =serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Pedido
        fields=('id','pedidos',"user")

class UserSerializer(serializers.HyperlinkedModelSerializer):
    pedidouser = PedidoSerializer(read_only=True,many=True)
    class Meta:
        model = User
        fields = ('id','name','surname','email','adress','postalcode','city','phone','birthday','password','created_at',"pedidouser")
class RiderSerializer(serializers.HyperlinkedModelSerializer):
    userrider=serializers.PrimaryKeyRelatedField(queryset=User.objects.all(),many=False)
    class Meta:
        model = Rider
        fields= ('id','type_vehicle','libre','userrider')
class ProductSerializer(serializers.ModelSerializer):
    id_restaurant = serializers.PrimaryKeyRelatedField(queryset=Restaurant.objects.all())
    class Meta:
         model = Product
         fields = ('id','name','price','description','imagen','id_restaurant')
        
class RestaurantSerializer(serializers.ModelSerializer):
    products =ProductSerializer(read_only=True,many=True,)
    pedidosrestaurant = PedidosSerializer(read_only=True,many=True)
    class Meta:
        model = Restaurant
        fields = ('id','name','email','phone','adress','city','postalcode','description','imagen','products','pedidosrestaurant')
   
