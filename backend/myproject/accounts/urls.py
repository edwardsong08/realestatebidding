from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token  # DRF built-in login view
from .views import SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', obtain_auth_token, name='login'),
]
