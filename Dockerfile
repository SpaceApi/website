FROM python:3.14 AS builder

ENV LANG=en_US.utf8

# Install requirements
COPY requirements.txt /tmp/
RUN pip install -U -r /tmp/requirements.txt && rm /tmp/requirements.txt

# Add sources and build the site
COPY . /code
RUN cd /code && lektor build -f scsscompile --output-path /code/output

# Move generated data to separate alpine-based image
FROM nginx:1.29-alpine as server

RUN apk --update --no-cache add curl
HEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1

RUN rm -Rf /usr/share/nginx/html
COPY --from=builder /code/output /usr/share/nginx/html
COPY configs/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
USER nginx
