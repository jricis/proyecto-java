
from django.urls import path
from .views import UserView

urlpatterns = [
    
    path('home',UserView.as_view()),
    path('new',UserView.newest)
]
