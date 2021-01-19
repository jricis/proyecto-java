from rest_framework import serializers
from .models import User

class UserSeralizer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','user','email','password')
