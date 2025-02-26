from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    # Make the password write-only so it is never returned in API responses
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        # Define which fields you want to expose. Here, we’re using username, email, and password.
        fields = ('username', 'email', 'password')
    
    def create(self, validated_data):
        """
        This method is called when a new user is created via this serializer.
        We use Django’s create_user method to ensure that the password is hashed.
        """
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']
        )
        return user
