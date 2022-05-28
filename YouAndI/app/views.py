from django.shortcuts import render, redirect
from .models import User, Test


def main(request):
    return render(request, 'main.html')
    
# Create your views here.
def user_create(request):
    if (request.method=="POST"):
        user= User.objects.create(
            name = request.POST['username'],
            password = request.POST['password'],
        )
        return redirect('testcreate')
    
    return render(request, 'user1_login.html')


def test_create(request):
    if (request.method == "POST"):
        new_test = Test.objects.create(
            testname = request.POST['testname'],

            truetag1=request.POST['truelike1'],
            truetag2=request.POST['truelike2'],
            truetag3=request.POST['truelike3'],
            truetag4=request.POST['truelike4'],
            truetag5=request.POST['truelike5'],
            
            falsetag1=request.POST['falselike1'],
            falsetag2=request.POST['falselike2'],
            falsetag3=request.POST['falselike3'],
            falsetag4=request.POST['falselike4'],
            falsetag5=request.POST['falselike5'],
        )
        return redirect('testcheck', new_test.pk)
    
    return render(request, 'user1_create.html')

def test_checksend(request, test_pk):
    test = Test.objects.get(pk=test_pk)

    # link share fuction

    return render(request, 'user1_check.html', {'test':test})



# Guest
def test_load(request, user_name):
    test = Test.objects.filter(username=user_name)

    return render(request, 'user2_test.html', {'test': test[0]})


def test_result(request, test_pk):
    test = Test.objects.get(pk=test_pk)
    result = 0
    if request.method == "POST":
        truetag = [test.truetag1, test.truetag2,
                   test.truetag3, test.truetag4, test.truetag5]
        if request.POST['sel1'] in truetag:
            result += 1
        if request.POST['sel2'] in truetag:
            result += 1
        if request.POST['sel3'] in truetag:
            result += 1
        if request.POST['sel4'] in truetag:
            result += 1
        if request.POST['sel5'] in truetag:
            result += 1

        #
        if result == 0:
            return render(request, '')
        elif result == 1:
            return render(request, '')
        elif result == 2:
            return render(request, '')
        elif result == 3:
            return render(request, '')
        elif result == 4:
            return render(request, '')
        elif result == 5:
            return render(request, '')

    return render(request, 'user2_test.html', )

