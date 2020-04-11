from django.urls import path
from .views import PaymentAPIView

urlpatterns = [
    path('mpesa_payments/', PaymentAPIView.as_view()),
]
