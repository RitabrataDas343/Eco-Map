from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('save_user_data/',views.save_user_data,name='save_user_data'),
    path('c_offset/',views.c_offset,name='c_offset'),
    path('c_offset/remove_carbon_footprint/',views.remove_carbon_footprint,name='remove_carbon_footprint'),
    path('aboutus/',views.aboutus,name='aboutus'),
    path('resource/', views.resource, name='resource'),
]