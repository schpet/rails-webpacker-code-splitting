# README

## Pushing to heroku

```bash
heroku create
heroku buildpacks:set heroku/nodejs --index 1
heroku buildpacks:set heroku/ruby --index 2
git push heroku master
```
