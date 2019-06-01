#!/usr/bin/env node

const path = require('path');
const { writeFileSync } = require('fs');
const download = require('download');
const unsplash = require('./unsplash');
const setBackgroundImage = require('./utils/setBackgroundImage');
const setScreensaverBackgroundImage = require('./utils/setScreensaverBackgroundImage');
const wait = require('./utils/wait');
const imagesRoot = path.resolve(__dirname, '..', 'images');

const interval = 1000 * 60 * 60;

main();
async function main() {
  while (true) {
    console.time('Done');
    try {
      console.log(`Requesting random photo`);
      const photoResponse = await unsplash.photos.getRandomPhoto({
        width: 1920,
        height: 1080,
        collections: ['wallpapers'],
        orientation: 'landscape'
      });
      const photo = await photoResponse.json();
      const filepath = path.join(imagesRoot, 'background.png');

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
    await wait(interval);
  }
}

