#!/bin/bash
# find ~/ -name docker-basics\*
# sleep 10
# ls -a
source /root/.local/share/virtualenvs/missionaryfamily777-*/bin/activate
export $(grep -v '^#' .env | xargs)
# pipenv shell
echo "<<<<<<<<<< Export LANG to the Env>>>>>>>>>>"
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
echo "<<<<<<<< Database Setup and Migrations Starts >>>>>>>>>"
# Run database migrations
python manage.py migrate
sleep 5
echo "<<<<<<< Database Setup and Migrations Complete >>>>>>>>>>"
echo " "
echo " "
echo "<<<<<<<<<<<<<<<<<<<< START Celery >>>>>>>>>>>>>>>>>>>>>>>>"
# start Celery worker
 celery -A home worker -B -l info &
# # start celery beat
# celery -A celery_conf.celery_periodic_scheduler beat --loglevel=info &
sleep 5
echo "<<<<<<<<<<<<<<<<<<<< START API >>>>>>>>>>>>>>>>>>>>>>>>"
python manage.py runserver 0.0.0.0:8000
# Start the API with gunicorn
# gunicorn --access-logfile '-' --workers 2 -t 3600 manage:app --worker-class gevent -b 0.0.0.0:5000 --reload  &