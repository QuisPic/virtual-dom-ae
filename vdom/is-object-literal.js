module.exports = isObjectLiteral

function isObjectLiteral(a) {
  return a && a.constructor === Object
};