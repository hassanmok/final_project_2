from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from .models import User, Category, Item

# Create your views here.

from django.http import JsonResponse

def store_order(request):
    if request.method == 'POST':
        user = request.POST.get('user', '')
        total_price = request.POST.get('total_price', '')
        date = request.POST.get('date', '')

        return JsonResponse({'message': 'Order stored successfully'})

    return JsonResponse({'message': 'Invalid request method'})


def index(request):
        
        if request.user.is_authenticated:
            all_category = Category.objects.all()
            all_item = Item.objects.filter(state = True)
            return render(request, 'index.html',{
                'all_category': all_category,
                "all_item":all_item
            })
    # Everyone else is prompted to sign in
        else:
            return HttpResponseRedirect(reverse("login"))

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("login"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("login"))
    else:
        return render(request, "register.html")
    