from django.urls import path
from .views import get_data
from .views import ChatbotAPIView

urlpatterns = [
    path('data/', get_data),
    path('chat/', ChatbotAPIView.as_view(), name='chat'),
]
