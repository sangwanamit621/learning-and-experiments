# we can write Dockerfile commands in lower and upper case but upper case is more preferred

# FROM - Defines a base image, it can be pulled from docker hub. A FROM statement defines which image to download and start from. 
# It must be the first command in your Dockerfile. A Dockerfile can have multiple FROM statements which means the Dockerfile 
# produces more than one image.
FROM python:3.8-slim-buster


# LABEL - This statement is a kind of documentation, which defines the author who is creating this Dockerfile 
# or who should you contact if it has bugs. (Optional)
LABEL Amit Sangwan

# RUN - This command will execute the given statement . The RUN statement defines running a command through the shell, 
# waiting for it to finish, and saving the result. It tells what process will be running inside the container at the run time.
RUN mkdir /project


# this will copy the files from local to image
# COPY ./requirements.txt /project/requirements.txt  # to copy specific file
COPY . /project

# this will make the /project as working directory for the image and everything will be executed from this point in the image terminal/CMD
WORKDIR /project

# RUN will execute this command to install libraries
RUN pip3 install --upgrade -r requirements.txt

EXPOSE 8844

# CMD will execute commands in terminal of image
CMD ["python3","app.py"]

