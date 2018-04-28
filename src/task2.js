const R = require('ramda');

const checkAndSend = R.memoizeWith(R.identity, () => {
  console.log('Request has been sent')
});

module.exports = {
  checkAndSend,
};
