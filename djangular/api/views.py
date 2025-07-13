# api/views.py
from rest_framework import viewsets
from .serializer import MovieSerializer
from .models import Movie

class MovieViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows movies to be viewed or edited.
    """
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer