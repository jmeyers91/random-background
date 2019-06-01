module.exports = function notNaN(value, message) {
  if (Number.isNaN(+value)) {
    throw new Error(message);
  }
  return value;
}