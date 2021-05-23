
from django.urls import path, include
from .views import index

urlpatterns = [

  path('',index),
  path('registrouser/',index),
  path('registrorestaurante/',index),
  path('registrorider/',index),
  path('homerider/<uuid:uuid>/',index),
  path('loginuser/',index),
  path('perfil/<uuid:uuid>/',index),
  path('loginrider/',index),
  path('restaurante/<uuid:uuid>/',index),
  path('viewproductrestaurant/<uuid:uuid>/',index),
  path('loginrestaurante',index),
  path('addproductrestaurant/<uuid:uuid>/',index),
  path('viewproductuser/<path:slug>',index),
  path('pago',index)
]
