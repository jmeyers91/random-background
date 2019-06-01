const Unsplash = require('unsplash-js').default;
const { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } = require('./env');
global.fetch = require('node-fetch');

const unsplash = new Unsplash({
  applicationId: UNSPLASH_ACCESS_KEY,
  secret: UNSPLASH_SECRET_KEY,
});

module.exports = unsplash;
