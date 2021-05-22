
from django.urls import path, include
from .views import index

urlpatterns = [

  path('home/',index),
  path('home/registroUser/',index),
  path('home/registroRestaurante/',index),
  path('home/RegistroRider/',index),
  path('home/HomeRider/<uuid:uuid>/',index),
  path('home/LoginUser/',index),
  path('home/Perfil/<uuid:uuid>/',index),
  path('home/LoginRider/',index),
  path('home/Restaurante/<uuid:uuid>/',index),
  path('home/ViewProductRestaurant/<uuid:uuid>/',index),
  path('home/LoginRestaurante',index),
  path('home/AddProductRestaurant/<uuid:uuid>/',index)
]
