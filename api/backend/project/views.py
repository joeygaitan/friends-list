from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerilizers
# Create your views here.
class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerilizers

# class PostView()

