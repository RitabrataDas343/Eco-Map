from django.shortcuts import render
from .models import accountholder
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.
def home(rq):
    return render(rq, 'mapapp/home.html')

def save_user_data(rq):
    carbon_footprint_value=float(rq.POST['carbon_footprint'])
    if accountholder.objects.filter(user=rq.user).exists():
        a=accountholder.objects.get(user=rq.user)
        a.carbon_footprint+=carbon_footprint_value
        a.save()
    else:
        a=accountholder(carbon_footprint=carbon_footprint_value, user=rq.user)
        a.save()
    return HttpResponseRedirect('/mapapp')

def c_offset(rq):
    if accountholder.objects.filter(user=rq.user).exists():
        print('ok')
    else:
        a=accountholder(carbon_footprint=0, user=rq.user)
        a.save()
    a=accountholder.objects.get(user=rq.user)
    param={
        'carbon_footprint':a.carbon_footprint,
        'carbon_offset_cost':(a.carbon_footprint*0.9)
    }
    return render(rq,'mapapp/c_offset.html',param)

def aboutus(rq):
    return render(rq, 'mapapp/aboutus.html')
def resource(rq):
    return render(rq, 'mapapp/resource.html')

def remove_carbon_footprint(rq):
  if accountholder.objects.filter(user=rq.user).exists():
    a=accountholder.objects.get(user=rq.user)
    a.carbon_footprint=0.0
    a.save()
  else:
    a=accountholder(carbon_footprint=0.0, user=rq.user)
    a.save()

  a=accountholder.objects.get(user=rq.user)
  print('*******************')
  print(a.carbon_footprint)
  param={
        'carbon_footprint':a.carbon_footprint,
        'carbon_offset_cost':(a.carbon_footprint*0.9)
    }
  return HttpResponseRedirect('/mapapp/c_offset/')