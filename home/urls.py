from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('assignments/', include('api.assignments.urls')),
    path('graded-assignments/', include('api.graded_assignments.urls')),
    path('users/', include('users.urls')),
    path('api/',include('articles.api.urls')),
    path('images/',include('images.api.urls')),
    path('books/',include('books.api.urls')),
    path('music/',include('music.api.urls')),
    path('sermons/',include('sermons.api.urls')),
    path('mpesa/',include('mpesa.api.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
] 

# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
