FROM python:3 as builder

ENV LANG=en_US.utf8

# Install Node/npm for webpack
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update -y
RUN apt-get install build-essential nodejs  -y

# Add sources
COPY . /code

# Install requirements and build the site
RUN cd /code && \
    pip install -U -r requirements.txt && \
    lektor build -f webpack --output-path /code/output

# Move generated data to separate alpine-based image
FROM nginx:1.15-alpine
RUN rm -Rf /usr/share/nginx/html
COPY --from=builder /code/output /usr/share/nginx/html
