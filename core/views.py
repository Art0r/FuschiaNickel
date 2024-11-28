from django.shortcuts import render


def index(request):

    context = {}

    return render(template_name="index.html",
                  context=context, request=request)


def colors(request):

    context = {}

    return render(template_name="index.html",
                  context=context, request=request)
