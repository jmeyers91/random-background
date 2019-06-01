
/**
 * Throws an error.
 * 
 * Useful when you want to `throw` as an expression.
 */
module.exports = function fail(message) {
  throw new Error(message);
}