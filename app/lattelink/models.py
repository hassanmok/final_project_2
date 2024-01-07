from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    image = models.CharField(max_length=2048, null=True)

class Category(models.Model):
    category_name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.category_name}"

class Item(models.Model):
    user_add = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE,related_name='user_add')
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=2048)
    description = models.CharField(max_length=2048)
    price = models.FloatField()
    Quantity = models.IntegerField(null=True)
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE,related_name='category_item')
    state = models.BooleanField(default= True)
    date = models.DateTimeField(auto_now_add=True, null=True)
    def __str__(self):
        return f"{self.title}"

