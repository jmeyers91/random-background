const execa = require('execa');

/**
 * Updates the gnome desktop background.
 */
module.exports = async function setBackgroundImage(imagePath) {
  await execa('gsettings', ['set', 'org.gnome.desktop.background', 'picture-uri', imagePath]);
}
