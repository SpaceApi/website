FROM python:3 as builder

ENV LANG=en_US.utf8

# Install Node/npm for webpack
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get update -y
RUN apt-get install build-essential nodejs  -y

# Add sources
COPY . /code

# Install requirements and build the site
RUN cd /code && \
    pip install -U -r requirements.txt && \
    lektor build -f webpack --output-path /code/output


FROM nginx:1.15-alpine
# Remove default nginx files
RUN rm -Rf /usr/share/nginx/html
# Copy data from build image
COPY --from=builder /code/output /usr/share/nginx/html
