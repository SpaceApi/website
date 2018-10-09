FROM nginx:1.15-alpine

ENV LANG=en_US.utf8

# Install Python
RUN apk add --no-cache python3 make

# Python
RUN pip3 install pipenv

# Build HTML
COPY . /code
RUN cd /code && pipenv install && pipenv run make html

# Add code
RUN rm /usr/share/nginx/html/* && cp -Rv /code/output/* /usr/share/nginx/html/

# Expose ports
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
