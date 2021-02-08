
from django.urls import path
from .views import UserView, RestaurantView, ProductView

from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


urls = routers.DefaultRouter()
urls.register('user',UserView,basename='languages')
urls.register('restaurant',RestaurantView,basename='languages')
urls.register('product',ProductView,basename='languages')



