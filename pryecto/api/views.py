from django.shortcuts import render
from rest_framework import generics,status, viewsets
from .serializers import  RestaurantSerializer,ProductSerializer,PedidoSerializer
from .models import User,Restaurant,Product, Pedido
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

# class UserView(viewsets.ModelViewSet):    
#     queryset=User.objects.all()
#     serializer_class = UserSeralizer
#     filter_backends=[DjangoFilterBackend]
#     filterset_fields = ['postalcode','email']
    
 
class RestaurantView(viewsets.ModelViewSet):   
    queryset=Restaurant.objects.all()
    serializer_class= RestaurantSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields = ['name','adress']
    def restaurant_details(self,request,pk):
        try:
            restaurant=Restaurant.objects.get(pk=pk)
        except Restaurant.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method=='PUT':
            serializer=RestaurantSerializer(restaurant,data=request.DATA)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.data)    
        
    
class ProductView(viewsets.ModelViewSet):   
    queryset=Product.objects.all()
    serializer_class= ProductSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields = ['name','adress','postalcode'] 
class PedidoView(viewsets.ModelViewSet):
    queryset=Pedido.objects.all()
    serializer_class=PedidoSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields = ['num_pedido','restaurants'] 
    
