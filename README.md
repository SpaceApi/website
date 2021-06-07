# spaceapi.io

[![GitHub CI][ci-badge]][ci]
[![Docker Image][docker-image-badge]][docker-image]

These are the sources for the SpaceAPI website.

The website is generated using Lektor, a static site generator written in
Python. This simplifies hosting and makes the website very fast.


## Dev Setup

### Variant A: Virtualenv

Prerequisites:

- Python 3
- npm

Create and activate a virtualenv:

    python3 -m venv VENV
    source VENV/bin/activate

Install dependencies:

    pip install -U -r requirements.txt

Run dev server:

    lektor server -f scsscompile

Now open `http://localhost:5000/` in your browser.

### Variant B: Docker

Prerequisites:

- Docker

To use docker you can run:

    docker build -t website -f Dockerfile_dev .
    docker run -v $(pwd):/code -it -p5000:80 website

Then open http://localhost:5000


## Adding an App/Library/Tool (aka "Stuff")

### With Lektor

1. Fork this repository on GitHub
2. Run the dev setup as described above.
3. Go to http://localhost:5000/admin/root:stuff/preview and press the "+" icon
   in the top left part of the navigation to add a new subpage
4. Choose the model "Stuff" and pick a title. An appropriate id will be
   automatically suggested.
5. Click "Add Child Page"
6. Fill out the form. To add a screenshot, click on "Add Attachment" in the
   left navigation.
7. Commit the changes in the file system and submit the changes as a pull
   request against the [upstream project](https://github.com/spaceapi/website)

### Without Lektor

1. Fork this repository on GitHub
2. In the `content/stuff/` directory, copy one of the existing models and adjust it
3. Make sure to replace the screenshot image with an image of your own
4. Commit the changes in the file system and submit the changes as a pull
   request against the [upstream project](https://github.com/spaceapi/website)


## Deployment

The website should auto-deploy after a push to master. The update might take a
few minutes though.


## Schema Docs

Schema documentation is generated from the schema. To update:

    python3 generate_schema_docs.py ../schema/13.json > content/docs/contents.lr


<!-- Badges -->
[ci]: https://img.shields.io/github/workflow/status/SpaceAPI/website/CI/master
[ci-badge]: https://github.com/SpaceAPI/website/actions?query=workflow%3ACI
[docker-image]: https://hub.docker.com/r/spaceapi/website/
[docker-image-badge]: https://img.shields.io/docker/pulls/spaceapi/website.svg
