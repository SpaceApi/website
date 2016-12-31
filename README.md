
# Run server locally

    pyvenv VENV
    source VENV/bin/activate
    pip install -r requirements.txt
    make html serve

# Change contents

To apply the changes of contents of `/content/pages/*` you must restart the webserver:

    make html serve

## Re-generate API docs

Update the file inside `schema/`. Then:

    python generate_api_docs.py > content/pages/docs.md
