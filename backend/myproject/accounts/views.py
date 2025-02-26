from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer

class SignUpView(generics.CreateAPIView):
    """
    This view handles POST requests for creating a new user.
    It uses the UserSerializer to validate input and create the user.
    """
    serializer_class = UserSerializer

