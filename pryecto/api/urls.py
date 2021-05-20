
from django.urls import path
from .views import  RestaurantView, ProductView, PedidoView,PedidosView,UserView, RiderView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

urls = routers.DefaultRouter()
#urls.register('user',UserView,basename='languages')
urls.register(r'user',UserView,basename='user'),
urls.register(r'pedidos',PedidosView,basename='pedidos'),
urls.register(r'restaurant',RestaurantView,basename='restaurant'),
urls.register(r'product',ProductView,basename='product'),
urls.register(r'pedido',PedidoView,basename='pedido'),
urls.register(r'rider',RiderView,basename='rider'),