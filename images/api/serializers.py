from rest_framework import serializers
from images.models import Image

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Image
        fields=['title','images']