from django.db import models

# Create your models here.
class Music(models.Model):
    name = models.CharField(max_length=120)
    musicfile = models.FileField(upload_to="music/")

    def __str__(self):
        return self.name