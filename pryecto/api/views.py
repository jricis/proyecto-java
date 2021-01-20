from django.shortcuts import render
from rest_framework import generics,status, viewsets
from .serializers import UserSeralizer
from .models import User
from rest_framework.response import Response
from rest_framework.views import APIView



# Create your views here.

class UserView(viewsets.ModelViewSet):
    
    
    serializer_class = UserSeralizer
    
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        queryset= User.objects.all()
        user = self.request.query_params.get('user', None)
        email =self.request.query_params.get('email', None)
        if user is not None and email is not None:
            queryset = queryset.filter(user=user,email=email)
            return queryset
        if user is not None:
            queryset = queryset.filter(user=user)
            return queryset
        if email is not None: 
            queryset = queryset.filter(email=email)
            return queryset
        return queryset

# class CreateRoomView(APIView):
#     serializer_class=CreateRoomSerializer
#     def post(self,request,format=None):
#         pass