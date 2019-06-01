const path = require('path');
const dotenv = require('dotenv');
const fail = require('./utils/fail');
const assertNotNaN = require('./utils/assertNotNaN');
const { MINUTE } = require('./utils/timeConstants');

/**
 * Loads default `process.env` variables from .env file if it exists.
 */
dotenv.config({
  path: path.resolve(__dirname, '..', '.env')
});

const { env } = process;

module.exports = {
  /**
   * Width of images to use for the background. Defaults to 1920.
   */
  RANDOM_BACKGROUND_WIDTH: assertNotNaN(
    env.RANDOM_BACKGROUND_WIDTH || '1920',
    `Invalid var RANDOM_BACKGROUND_WIDTH: '${env.RANDOM_BACKGROUND_WIDTH}'`
  ),

  /**
   * Height of images to use for the background. Defaults to 1080.
   */
  RANDOM_BACKGROUND_HEIGHT: assertNotNaN(
    env.RANDOM_BACKGROUND_HEIGHT || '1080',
    `Invalid var RANDOM_BACKGROUND_HEIGHT: '${env.RANDOM_BACKGROUND_HEIGHT}'`
  ),

  /**
   * Number of minutes between background changes. Defaults to 1 hour.
   */
  RANDOM_BACKGROUND_INTERVAL: assertNotNaN(
    env.RANDOM_BACKGROUND_INTERVAL || '' + (MINUTE * 60),
    `Invalid var RANDOM_BACKGROUND_INTERVAL: '${env.RANDOM_BACKGROUND_INTERVAL}'`
  ),

  /**
   * Orientation to use for background images.
   */
  RANDOM_BACKGROUND_ORIENTATION: env.RANDOM_BACKGROUND_ORIENTATION || 'landscape',

  /**
   * Unsplash collections to use when getting random images. Defaults to wallpapers.
   * The list should be comma seperated (ex. 'wallpapers, foo, bar')
   */
  RANDOM_BACKGROUND_COLLECTIONS: env.RANDOM_BACKGROUND_COLLECTIONS || 'wallpapaers',

  /**
   * Unsplash access key. Required.
   * See: https://github.com/unsplash/unsplash-js#creating-an-instance
   */
  UNSPLASH_ACCESS_KEY: env.UNSPLASH_ACCESS_KEY || fail('Missing env variable: UNSPLASH_ACCESS_KEY'),

  /**
   * Unsplash secret. Required.
   * See: https://github.com/unsplash/unsplash-js#creating-an-instance
   */
  UNSPLASH_SECRET_KEY: env.UNSPLASH_SECRET_KEY || fail('Missing env variable: UNSPLASH_SECRET_KEY'),
};
