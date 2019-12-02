FROM python:3 as builder

ENV LANG=en_US.utf8

# Install Node/npm for webpack
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update -y
RUN apt-get install build-essential nodejs  -y

# Install requirements
COPY requirements.txt /tmp/
RUN pip install -U -r /tmp/requirements.txt && rm /tmp/requirements.txt

# Add sources and build the site
COPY . /code
RUN cd /code && lektor build -f webpack --output-path /code/output

# Optimize images
RUN apt-get install jpegoptim optipng -y
RUN npm install -g svgo
WORKDIR /code/output
RUN jpegoptim -m 80 -t $(find . -name "*.jpg")
RUN optipng -o7 -strip all $(find . -name "*.png")
RUN svgo $(find . -name "*.svg")

# Move generated data to separate alpine-based image
FROM nginx:1.15-alpine as server
RUN apk update && apk add nginx-mod-http-headers-more
RUN rm -Rf /usr/share/nginx/html
COPY --from=builder /code/output /usr/share/nginx/html
COPY configs/nginx.conf /etc/nginx/nginx.conf
