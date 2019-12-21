#Our Image
FROM python:3

#Environment variable
#output of terminal is not
#buffered, sent straight to
#terminal
ENV PYTHONUNBUFFERED 1

# RUN CMD
RUN mkdir /code

#Set Working directory
WORKDIR /code

#Copy all source code 
#in out project to 
#our container
# "." means copy
#from local directory
COPY . /code/

RUN pip install -r requirements.txt