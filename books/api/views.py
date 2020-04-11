from rest_framework import viewsets
from django.http import HttpResponse

from books.models import Book
from .serializers import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

    def post(self, request, *args, **kwargs):
        cover = request.data['cover']
        title = requst.data['title']
        pdf_books = request.data['pdf_books']
        Book.objects.update_or_create(
            title=title,
            cover=cover,
            pdf_books=pdf_books
        )
        return HttpResponse({'message':'Book created'},status=200)