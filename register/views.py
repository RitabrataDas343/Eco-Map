from django.shortcuts import render, redirect
from .forms import registerform
# Create your views here.

def register(rq):
    if rq.method == 'POST':
        form = registerform(rq.POST)
        if form.is_valid():
            form.save()
        
        return redirect('/login/')
    else:
        form = registerform()
    return render(rq, "register/register.html",{"form":form})
