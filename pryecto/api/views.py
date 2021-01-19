from django.shortcuts import render
from rest_framework import generics,status
from .serializers import UserSeralizer
from .models import User
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class UserView(generics.ListAPIView):
    
    queryset= User.objects.all()
    serializer_class = UserSeralizer

# class CreateRoomView(APIView):
#     serializer_class=CreateRoomSerializer
#     def post(self,request,format=None):
#         pass


    

