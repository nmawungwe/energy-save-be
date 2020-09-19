from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import User

# Create your views here.

def index(request):
    if request.user.is_authenticated:
        return render(request, 'backend/index.html')
    else:
        return render(request, 'backend/login.html')

def login_view(request):
    if request.method == "POST":
        #Attempt to sign in user
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        #checking if authentification was successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "backend/login.html", {"message":"Incorrect username/password"})
    else:
        return render(request, "backend/login.html")

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        #Esurring passwords match
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "backend/register.html", {"message":"Passwords must match"})
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "backend/register.html", {"message":"Username already taken."})
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "backend/register.html")