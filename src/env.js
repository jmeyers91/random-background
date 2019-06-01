const path = require('path');
const dotenv = require('dotenv');
const fail = require('./utils/fail');

dotenv.config({
  path: path.resolve(__dirname, '..', '.env')
});

const { env } = process;

module.exports = {
  UNSPLASH_ACCESS_KEY: env.UNSPLASH_ACCESS_KEY || fail('Missing env variable: UNSPLASH_ACCESS_KEY'),
  UNSPLASH_SECRET_KEY: env.UNSPLASH_SECRET_KEY || fail('Missing env variable: UNSPLASH_SECRET_KEY'),
};
