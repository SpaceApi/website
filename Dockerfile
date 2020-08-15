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
RUN cd /code && lektor build -f webpack -f scsscompile --output-path /code/output

# Move generated data to separate alpine-based image
FROM nginx:1.19-alpine as server

RUN apk --update --no-cache add curl
HEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1

RUN rm -Rf /usr/share/nginx/html
COPY --from=builder /code/output /usr/share/nginx/html
COPY configs/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
USER nginx
