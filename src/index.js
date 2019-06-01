#!/usr/bin/env node

const path = require('path');
const { writeFileSync } = require('fs');
const download = require('download');
const unsplash = require('./unsplash');
const setBackgroundImage = require('./utils/setBackgroundImage');
const setScreensaverBackgroundImage = require('./utils/setScreensaverBackgroundImage');
const wait = require('./utils/wait');
const {
  RANDOM_BACKGROUND_INTERVAL,
  RANDOM_BACKGROUND_WIDTH,
  RANDOM_BACKGROUND_HEIGHT,
  RANDOM_BACKGROUND_ORIENTATION,
  RANDOM_BACKGROUND_COLLECTIONS,
} = require('./env');
const { SECOND } = require('./utils/timeConstants');
const imagesRoot = path.resolve(__dirname, '..', 'images');

const MIN_INTERVAL = 10 * SECOND;
const changeInterval = parseInt(RANDOM_BACKGROUND_INTERVAL, 10);
const screenWidth = parseInt(RANDOM_BACKGROUND_WIDTH, 10);
const screenHeight = parseInt(RANDOM_BACKGROUND_HEIGHT, 10);
const collections = RANDOM_BACKGROUND_COLLECTIONS.split(',')
  .map(value => value.trim())
  .filter(value => value.length > 0)

/**
 * Make sure the change interval isn't too low.
 * We don't want to accidentally hit the Unsplash rate limit.
 */
if (changeInterval < MIN_INTERVAL) {
  throw new Error(`Invalid change interval: '${RANDOM_BACKGROUND_INTERVAL}'.\nRANDOM_BACKGROUND_INTERVAL must be a number greater than ${MIN_INTERVAL}.`)
}

main();
async function main() {
  while (true) {
    console.time('Done');
    try {
      console.log(`Requesting random photo`);
      const photoResponse = await unsplash.photos.getRandomPhoto({
        width: screenWidth,
        height: screenHeight,
        orientation: RANDOM_BACKGROUND_ORIENTATION,
        collections: collections,
      });
      const photo = await photoResponse.json();
      const filepath = path.join(imagesRoot, 'background');

      console.log('Downloading photo');
      writeFileSync(filepath, await download(photo.urls.raw));

      console.log('Setting background images');
      await setBackgroundImage(filepath);
      await setScreensaverBackgroundImage(filepath);
    } catch (error) {
      console.error(`Failed to download new background`, error.stack);
    } finally {
      console.timeEnd('Done');
    }
    await wait(changeInterval);
  }
}

