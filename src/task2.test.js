const { checkAndSend } = require('./task2');

describe('checkAndSend', () => {
  it('should return true if id is new', () => {
    expect(checkAndSend('1488')).toBeTruthy();
    expect(checkAndSend('1489')).toBeTruthy();
    expect(checkAndSend('1490')).toBeTruthy();
  });

    it('should return true if id is new', () => {
      expect(checkAndSend('1588')).toBeTruthy();
      expect(checkAndSend('1588')).toBeFalsy();
      expect(checkAndSend('1589')).toBeTruthy();
    });
});
