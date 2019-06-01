const execa = require('execa');

const dimensionRegex = /dimensions:\s+(\d+)x(\d+)/;
module.exports = async function getScreenDimensions() {
  const { stdout } = await execa('xdpyinfo');
  const match = stdout.match(dimensionRegex);

  if (!match) {
    return null;
  }

  return {
    width: parseInt(match[1]),
    height: parseInt(match[2]),
  }
}
