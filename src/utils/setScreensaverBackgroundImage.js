const execa = require('execa');

module.exports = async function setScreensaverBackgroundImage(imagePath) {
  await execa('gsettings', ['set', 'org.gnome.desktop.screensaver', 'picture-uri', imagePath]);
}
