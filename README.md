# Random Background

Ubuntu desktop background switcher.

# Setup

Install local dependencies.

```
npm i
```

Create an [Unsplash account](https://unsplash.com/developers) and paste your access/secret keys into `.env`.

```
cp .env.example .env
```

Install PM2

```
npm i --global pm2
```

Start

```
pm2 start ./src/index.js
```

Follow [this guide](http://pm2.keymetrics.io/docs/usage/startup/) to run PM2 on startup. You will also need to tweak the systemd config to ensure we have network access before starting (see [this doc](http://pm2.keymetrics.io/docs/usage/startup/#systemd-installation-checking)).
