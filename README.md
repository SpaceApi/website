# spacedirectory.org

This are the sources for the Space Directory website.

The website is generated using Pelican, a static site generator written in
Python. This simplifies hosting and makes the website very fast.

## Run server locally

Prerequisites: Python 3 and [pipenv](https://docs.pipenv.org/).

    $ pipenv install
    $ pipenv run make html serve

Then visit `http://localhost:8000` in your browser to see the result.

## Change contents

To apply the changes of contents of `/content/pages/*` you must restart the webserver:

    make html serve

## Re-generate API docs

Update the file inside `schema/`. Then:

    python generate_api_docs.py > content/pages/docs.md

## Deployment

Ping [@dbrgn](https://github.com/dbrgn/) :)

To deploy, make sure to enable the virtualenv, then type:

    make clean html rsync_upload
