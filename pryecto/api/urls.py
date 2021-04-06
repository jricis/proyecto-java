
from django.urls import path
from .views import  RestaurantView, ProductView, PedidoView,PedidosView,UserView, RiderView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


urls = routers.DefaultRouter()


#urls.register('user',UserView,basename='languages')
urls.register(r'user',UserView,basename='languages'),
urls.register(r'pedidos',PedidosView,basename='languages'),
urls.register(r'restaurant',RestaurantView,basename='languages'),
urls.register(r'product',ProductView,basename='languages'),
urls.register(r'pedido',PedidoView,basename='languages'),
urls.register(r'rider',RiderView,basename='languages'),




