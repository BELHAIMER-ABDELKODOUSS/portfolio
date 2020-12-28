from django.conf.urls import url
from .views import *

app_name = 'port_app'

urlpatterns = [
    url(r'^$', Home, name='Home'),
    
]
