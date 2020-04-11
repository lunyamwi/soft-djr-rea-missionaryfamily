from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=32,blank=False)
    cover = models.ImageField(blank=True,null=True,upload_to="books/cover_images/")
    pdf_books = models.FileField(blank=True,null=True,upload_to="books/pdf/")

    def __str__(self):
        return self.title