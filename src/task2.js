const R = require('ramda');

// const checkAndSend = callBack =>
//   R.memoizeWith(R.identity, id => {
//     callBack(id);
//   });

// и еще проще:
const checkAndSend = callBack => R.memoizeWith(R.identity, callBack);

module.exports = {
  checkAndSend,
};
