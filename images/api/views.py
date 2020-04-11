from rest_framework import viewsets
from django.http import HttpResponse

from images.models import Image
from .serializers import ImageSerializer


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()

    def post(self, request, *args, **kwargs):
        title = request.data['title']
        images = requst.data['images']
        Image.objects.update_or_create(
            title=title,
            image=images,
        )
        return HttpResponse({'message':'Image stored in the database'},status=200)