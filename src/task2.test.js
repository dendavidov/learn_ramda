const { checkAndSend } = require('./task2');

describe('checkAndSend', () => {
  let callBack;
  beforeEach(() => {
    callBack = jest.fn();
  });

  it('should call all calbacks', () => {
    const sendById = checkAndSend(callBack);

    sendById('1488');
    sendById('1489');
    sendById('1490');

    expect(callBack.mock.calls.length).toBe(3);
    expect(callBack.mock.calls[0][0]).toBe('1488');
    expect(callBack.mock.calls[1][0]).toBe('1489');
    expect(callBack.mock.calls[2][0]).toBe('1490');
  });

  it('should call calbacks only if id is uniq', () => {
    const sendById = checkAndSend(callBack);
    sendById('1488');
    sendById('1489');
    sendById('1489');

    expect(callBack.mock.calls.length).toBe(2);
    expect(callBack.mock.calls[0][0]).toBe('1488');
    expect(callBack.mock.calls[1][0]).toBe('1489');
  });
});
