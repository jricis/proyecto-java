
from django.urls import path
from .views import ImageView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


urls = routers.DefaultRouter()
urls.register('image',ImageView,basename='languages')

