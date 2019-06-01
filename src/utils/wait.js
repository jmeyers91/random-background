/**
 * Returns a promise that resolves after `ms` milliseconds have elapsed.
 */
module.exports = function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
