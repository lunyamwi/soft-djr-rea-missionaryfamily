from rest_framework import serializers
from sermons.models import Sermon

class SermonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Sermon
        fields=['name','sermonfile']