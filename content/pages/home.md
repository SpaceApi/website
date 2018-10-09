Title: SpaceAPI
Status: hidden
save_as: index.html

The purpose of the SpaceAPI is to define a unified specification across the
hackerspaces, makerspaces, fablabs, chaostreffs and the like across the world
that can be used to expose information to web apps or any other application.

The specification is based on the JSON data interchange format. The following
example shows how it looks like:

    :::json
    {
      "api": "0.13",
      "space": "Shackspace",
      "logo": "http://rescue.shackspace.de/images/logo_shack_brightbg_highres.png",
      "url": "http://shackspace.de",
      "location": {
        "address": "Ulmer Strasse 255, 70327 Stuttgart, Germany",
        "lon": 9.236,
        "lat": 48.777
      },
      "contact": {
        "email": "info@shackspace.de",
        "irc": "irc://irc.freenode.net/shackspace",
        "ml": "public@lists.shackspace.de",
        "twitter": "@shackspace"
      },
      "state": {
        "icon": {
          "open": "http://shackspace.de/sopen.gif",
          "closed": "http://shackspace.de/sopen.gif"
        },
        "open": true
      },
      "projects": [
        "http://github.com/shackspace",
        "http://shackspace.de/wiki/doku.php?id=projekte"
      ]
    }

## Contributing

We encurage anybody who wants to participate in this project to join the
disussion on GitHub, the #spaceapi IRC channel on freenode or our Mattermost
instance on https://chat.spaceapi.net!
