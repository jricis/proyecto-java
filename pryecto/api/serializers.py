from rest_framework import serializers
from .models import User

class UserSeralizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','user','email','password')

def get(self,request,format=None):
    if(serializers.is_valid())