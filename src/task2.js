const R = require('ramda');

const checkAndSend = callBack =>
  R.memoizeWith(R.identity, id => {
    callBack(id);
  });

module.exports = {
  checkAndSend,
};
