from django.db import models

# Create your models here.
class Sermon(models.Model):
    '''
    in the case there will be a need of recording the time that 
    the document was uploaded for uniqueness one can resort to the code below.
    videofile=models.FileField(upload_to="sermons/%Y/%m/%d")
    '''
    name=models.CharField(max_length=500)
    sermonfile=models.FileField(upload_to="sermons/")

    def __str__(self):
        return self.name+":"+str(self.sermonfile)
