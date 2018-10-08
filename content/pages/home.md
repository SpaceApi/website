Title: Space Directory
Status: hidden
save_as: index.html

The Space Directory project is a friendly fork of the
[Space API](http://spaceapi.net/) project that was started during
[33c3](https://en.wikipedia.org/wiki/Chaos_Communication_Congress) by people
from [Coredump](https://www.coredump.ch/) and [Fixme](https://fixme.ch/).

The purpose of the Space API is to define a unified specification across the
hackerspaces, makerspaces, fablabs, chaostreffs and the like across the world
that can be used to expose information to web apps or any other application.

For more information about the Space API specification itself, please refer to
[http://spaceapi.net/](http://spaceapi.net/) for now.

## The Fork

The reason for the fork was that the original project at
[spaceapi.net](http://spaceapi.net/) wasn't being maintained anymore. Pull
requests were waiting for multiple months or years and sometimes the API was
down or the directory response was incomplete or broken.

This fork aims to revive the development activity around the Space API.

As of October 2017 we are trying to work together with the original SpaceAPI
developer. So far we set up some infrastructure and meet semi regularly to
discuss our progress. Check out https://github.com/SpaceApi/meeting-notes for
our discussions. We encurage anybody who wants to participate to join the
disussion on GitHub, the #spaceapi IRC channel on freenode or our mattermost
instance on https://chat.spaceapi.net!


## Status

- [x] Host the directory on a [reliable server](https://spaceapi.fixme.ch/)
- [x] Add [API documentation](/pages/docs.html)
- [x] Port [JSON schema files](https://github.com/spacedirectory/schema) to new format (IETF draft 4)
- [x] Create [updated apps page](/pages/apps.html) that showcases existing projects
- [x] Write a simple schema [validator](https://github.com/spacedirectory/validator) (work in progress)
- [ ] Add a "getting started" guide to the website (planning)
- [ ] Rewrite the directory server (planning)
