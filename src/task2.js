const cache = [];

const checkAndSend = id => {
  if (cache.includes(id)) {
    // this id has been already sent, do nothing
    return false;
  }

  cache.push(id);

  // here we send request
  return true;
};

module.exports = {
  checkAndSend,
};
