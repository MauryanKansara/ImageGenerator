from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('generate-images/', views.generateImage, name='generate-images'),
]
