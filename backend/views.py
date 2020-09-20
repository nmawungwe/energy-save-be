from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import User, Appliance

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


@csrf_exempt
def appliances(request):
    if request.method == "GET":
        pass
    else:
        TVs_num = request.POST["TVs_num"]
        Decoders_num = request.POST["Decoders_num"]
        SoundSystems_num = request.POST["SoundSystems_num"]
        Lights_num = request.POST["Lights_num"]
        Heaters_num = request.POST["Heaters_num"]
        Stoves_num = request.POST["Stoves_num"]
        Fridges_num = request.POST["Fridges_num"]
        Kettles_num  = request.POST["Kettles_num"]
        Microwaves_num  = request.POST["Microwaves_num"]
        Computers_num  = request.POST["Computers_num"]
        Printers_num  = request.POST["Printers_num"]
        Modems_num  = request.POST["Modems_num"]
        ElectricBlanket_num  = request.POST["ElectricBlanket_num"]
        Phones_num  = request.POST["Phones_num"]
        addition = Appliance(user=request.user.id, TVs_num=TVs_num, Decoders_num=Decoders_num, SoundSystems_num=SoundSystems_num, Lights_num=Lights_num , Heaters_num=Heaters_num, Stoves_num=Stoves_num, Fridges_num=Fridges_num, Kettles_num=Kettles_num, Microwaves_num=Microwaves_num, Computers_num=Computers_num, Printers_num=Printers_num, Modems_num=Modems_num, ElectricBlanket_num=ElectricBlanket_num, Phones_num=Phones_num)
        addition.save()
        return JsonResponse({"message":"Addition of appliances was successful"},)
        

