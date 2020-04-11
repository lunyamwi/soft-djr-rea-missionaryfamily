from rest_framework import viewsets
from django.http import HttpResponse

from music.models import Music
from .serializers import MusicSerializer


class MusicViewSet(viewsets.ModelViewSet):
    serializer_class = MusicSerializer
    queryset = Music.objects.all()

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        musicfile = requst.data['musicfile']
        Music.objects.update_or_create(
            name=name,
            musicfile=musicfile,
        )
        return HttpResponse({'message':'Music file created'},status=200)