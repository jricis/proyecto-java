
from django.urls import path, include
from .views import index

urlpatterns = [

  path('home/',index),
  path('home/registroUser/',index),
  path('home/registroRestaurante/',index),
  path('home/registroRider/',index),
  path('home/HomeRider/',index),
  path('home/LoginUser/',index)
]
