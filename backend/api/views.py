from rest_framework.decorators import api_view
from rest_framework.response import Response

import openai
from decouple import config


openai.api_key = config('API_KEY')
# Create your views here.


def dalle_api_call(message):
    response = openai.Image.create(
        prompt=message,
        n=3,
        size="256x256"
    )
    images_url = response['data']
    return {'prompt': message, "images_url": images_url}


@api_view(['GET'])
def apiOverview(request):
    api_endpoints = [
        'generate-images/',
    ]
    return Response(api_endpoints)


@api_view(["POST"])
def generateImage(request):
    if request.method == 'POST':
        print(request.data)
        print(request.data['prompt'])
        response = dalle_api_call(request.data['prompt'])
        print(response)
        return Response(response)

    return Response('')
