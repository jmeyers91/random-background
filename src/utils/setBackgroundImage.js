const execa = require('execa');

module.exports = async function setBackgroundImage(imagePath) {
  await execa('gsettings', ['set', 'org.gnome.desktop.background', 'picture-uri', imagePath]);
}
