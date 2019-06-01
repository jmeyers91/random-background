const execa = require('execa');

/**
 * Updates the gnome lock screen cover image.
 */
module.exports = async function setScreensaverBackgroundImage(imagePath) {
  await execa('gsettings', ['set', 'org.gnome.desktop.screensaver', 'picture-uri', imagePath]);
}
