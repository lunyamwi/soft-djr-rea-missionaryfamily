from rest_framework.routers import DefaultRouter
from .views import MusicViewSet

router = DefaultRouter()
router.register(r'', MusicViewSet, base_name='music')
urlpatterns = router.urls
