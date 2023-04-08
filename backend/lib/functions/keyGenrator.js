const { customAlphabet } = require('nanoid');

const couponCodeGen = (type, length = 6) => {
  if (type === 'alphanumeric') {
    return customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', length)();
  } else if (type === 'numeric') {
    return customAlphabet('1234567890', length)();
  } else if (type === 'alphabetic') {
    return customAlphabet('abcdefghijklmnopqrstuvwxyz', length)();
  }
};

module.exports = couponCodeGen;
