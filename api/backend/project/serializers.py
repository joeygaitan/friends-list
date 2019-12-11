from rest_framework import serializers

from .models import User, Post

class UserSerilizers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class PostSerilizers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'body')