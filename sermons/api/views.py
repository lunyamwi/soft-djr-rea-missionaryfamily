from rest_framework import viewsets
from django.http import HttpResponse

from sermons.models import Sermon
from .serializers import SermonSerializer


class SermonViewSet(viewsets.ModelViewSet):
    serializer_class = SermonSerializer
    queryset = Sermon.objects.all()

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        sermonfile = requst.data['sermonfile']
        Sermon.objects.update_or_create(
            name=name,
            sermonfile=sermonfile,
        )
        return HttpResponse({'message':'Sermon file created'},status=200)