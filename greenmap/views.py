from django.shortcuts import render

def home(rq):
    return render(rq, 'index.html')