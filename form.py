from django import forms
from django.forms import ModelForm
from .models import task

class taskform(ModelForm):
    taskname=forms.TextInput()
    desc=forms.TextInput()
    class meta():
        model=task
        fields=['task_name','name']
        