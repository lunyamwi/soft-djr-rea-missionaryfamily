from rest_framework.routers import DefaultRouter
from .views import SermonViewSet

router = DefaultRouter()
router.register(r'', SermonViewSet, base_name='sermons')
urlpatterns = router.urls
