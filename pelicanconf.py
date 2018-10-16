#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'SpaceAPI Contributors'
SITENAME = 'SpaceAPI'
SITEURL = 'https://spaceapi.io'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Paths
PAGE_PATHS = ['pages']
STATIC_PATHS = ['img', 'js']

# Menus
MENUITEMS = (
    ('Github', 'https://github.com/SpaceApi/website'),
)
FOOTERITEMS = (
    ('Github', 'https://github.com/SpaceApi'),
    ('Mastodon', 'https://chaos.social/@spaceapi'),
    ('Twitter', 'https://twitter.com/space_api'),
)

# Ordering
PAGE_ORDER_BY = 'sortorder'

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

# Markdown extensions
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {},
        'markdown_checklist.extension': {},
    },
    'output_format': 'html5',
}

# Blue Penguin Theme config
THEME = 'theme'
DISPLAY_HEADER = True
DISPLAY_FOOTER = True
DISPLAY_HOME = True
DISPLAY_MENU = True
TAGS_URL = 'tags'
TAGS_SAVE_AS = 'tags/index.html'
AUTHORS_URL = 'authors'
AUTHORS_SAVE_AS = 'authors/index.html'
CATEGORIES_URL = 'categories'
CATEGORIES_SAVE_AS = 'categories/index.html'
ARCHIVES_URL = 'archives'
ARCHIVES_SAVE_AS = 'archives/index.html'
