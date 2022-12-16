from django.shortcuts import render
from .form import taskform
# Create your views here.
def index(request):
    form=taskform
    if request.POST:
        form=taskform(request.POST)
        if form.is_valid():
            form.save()
    context={'form':form}
    return render(request,"h/index.html",context)