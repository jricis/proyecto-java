from django.shortcuts import render
from rest_framework import generics,status, viewsets
from .serializers import UserSeralizer, RestaurantSeralizer,ProductSerializer
from .models import User,Restaurant,Product
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.

class UserView(viewsets.ModelViewSet):    
    queryset=User.objects.all()
    serializer_class = UserSeralizer
    filter_backends=[DjangoFilterBackend]
    filterset_fields = ['postalcode','email']
    
 
class RestaurantView(viewsets.ModelViewSet):   
    queryset=Restaurant.objects.all()
    serializer_class= RestaurantSeralizer
    filter_backends=[DjangoFilterBackend]
    filterset_fields = ['name','adress']
class ProductView(viewsets.ModelViewSet):   
    queryset=Product.objects.all()
    serializer_class= ProductSerializer
    filter_backends=[DjangoFilterBackend]
    #filterset_fields = ['name','adress']       
    
