# README

## Pushing to heroku

Pushing this to heroku results in the buildpacks being in the wrong order. You
can correct them, and make sure all the ENV vars are set, with the commands
below.

```bash
heroku create
heroku buildpacks:set heroku/nodejs --index 1
heroku buildpacks:set heroku/ruby --index 2
heroku config:set NODE_ENV=production WEBPACK_ENV=production RACK_ENV=production RAILS_ENV=production RAILS_LOG_TO_STDOUT=enabled RAILS_SERVE_STATIC_FILES=enabled
git push heroku master
```
