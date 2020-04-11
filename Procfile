release: python manage.py migrate
worker: celery -A home worker -l info
web: gunicorn home.wsgi --log-file -