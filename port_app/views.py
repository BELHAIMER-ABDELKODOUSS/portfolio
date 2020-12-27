from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .forms import ContactForm
# Create your views here.


def Home(request):
    projocts = Projects.objects.all()
    skills = Skills.objects.all()
    contact = ContactForm()
    if(request.method == 'POST'):
        contact = ContactForm(request.POST)
        if contact.is_valid():
            contact.save()
            contact = ContactForm()
    return render(request, 'index.html', {'Projects': projocts, 'skills': skills, 'Contact': contact})
