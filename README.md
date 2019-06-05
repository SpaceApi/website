# spaceapi.io

[![CircleCI][circle-ci-badge]][circle-ci]
[![Docker Image][docker-image-badge]][docker-image]

This are the sources for the SpaceAPI website.

The website is generated using Lektor, a static site generator written in
Python. This simplifies hosting and makes the website very fast.


## Dev Setup

Create and activate a virtualenv:

    python3 -m virtualenv VENV
    source VENV/bin/activate

Install dependencies:

    pip install -U -r requirements.txt

Run dev server:

    lektor server -f webpack

Now open `http://localhost:5000/` in your browser.

### docker

To use docker you can run:
```bash
docker build -t website -f Dockerfile_dev .
docker run -v $(pwd):/code -it -p5000:80 website
```
Then open http://localhost:5000

## Deployment

The website should auto-deploy after a push to master. The update might take a
few minutes though.


<!-- Badges -->
[circle-ci]: https://circleci.com/gh/SpaceApi/website/tree/master
[circle-ci-badge]: https://circleci.com/gh/SpaceApi/website/tree/master.svg?style=shield
[docker-image]: https://hub.docker.com/r/spaceapi/website/
[docker-image-badge]: https://img.shields.io/docker/pulls/spaceapi/website.svg
