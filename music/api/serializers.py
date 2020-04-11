from rest_framework import serializers
from music.models import Music

class MusicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Music
        fields=['name','musicfile']