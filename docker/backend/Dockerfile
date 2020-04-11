# FROM python:3.6-alpine as build
# ENV LC_ALL C.UTF-8
# ENV LANG C.UTF-8
# RUN export LDFLAGS="-L/usr/local/opt/openssl/lib" export CPPFLAGS="-I/usr/local/opt/openssl/include"
# # Working directory where all the setup would take place in the image
# WORKDIR /missionaryfamily777
# # The default user that should be used
# USER root
# # copy the Pipfile & pipfile.lock which contains dependencies to be installed
# COPY ./Pipfile /missionaryfamily777
# COPY ./Pipfile.lock /missionaryfamily777
# # Install Alpine packages needed for the provisioning of the instance with python
# # and other packages
# RUN pip install --upgrade pip
# RUN pip install pipenv
# RUN apk -U update
# RUN apk add --no-cache --update build-base
# RUN apk add libpq
# RUN apk add --no-cache --update --virtual=deps bash zlib-dev zlib bzip2-dev libffi libffi-dev gcc python3-dev musl-dev postgresql-dev libevent-dev gfortran py-pip build-base git && \
#     export LC_ALL=C.UTF-8 && \
#     export LANG=C.UTF-8 && \
#     export PATH="/root/missionaryfamily777/start.sh:$PATH"
# RUN pipenv install
# USER root
# RUN export PATH="/root/missionaryfamily777/start_api.sh:$PATH"
# # && \
#     #  export PATH="/root/.pyenv /versions/3.6.5:$PATH"
# RUN ls -ahl /root
# RUN rm -rf .cache
# COPY . .

FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY Pipfile /code/
COPY Pipfile.lock /code/
RUN pip install pipenv
RUN pipenv install
COPY . /code/