const R = require('ramda');

const makeHashMap = apartmentsArray => {
  if (!Array.isArray(apartmentsArray))
    throw new Error('apartmentsArray should be an array');

  return R.reduce((hashMap, item) => {
    hashMap[item.id] = item;
    return hashMap;
  }, {}, apartmentsArray);
};

module.exports = {
  makeHashMap,
};
