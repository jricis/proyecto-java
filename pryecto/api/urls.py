
from django.urls import path
from .views import UserView
from rest_framework import routers


urls = routers.DefaultRouter()
urls.register('user',UserView,basename='languages')

