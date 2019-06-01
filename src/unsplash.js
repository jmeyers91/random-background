const Unsplash = require('unsplash-js').default;
const { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } = require('./env');

/**
 * Unsplash depends on a global `fetch` function, but it's not included in node.
 * see: https://github.com/unsplash/unsplash-js/issues/98
 */
global.fetch = require('node-fetch');

const unsplash = new Unsplash({
  applicationId: UNSPLASH_ACCESS_KEY,
  secret: UNSPLASH_SECRET_KEY,
});

module.exports = unsplash;
