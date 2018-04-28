const { makeHashMap } = require('./task1');

const apartments = [
  { id: '1', foo: 'bar', isTuzShown: true },
  { id: '2', foo: 'bar', isTuzShown: false },
  { id: '3', foo: 'bar', isTuzShown: true },
  { id: '4', foo: 'bar', isTuzShown: true },
  { id: '5', foo: 'bar', isTuzShown: false },
  { id: '6', foo: 'bar', isTuzShown: true },
  { id: '7', foo: 'bar', isTuzShown: false },
  { id: '8', foo: 'bar', isTuzShown: true },
];

describe('task1', () => {
  it('should throw error if param is not array', () => {
    expect(() => {
      makeHashMap(null);
    }).toThrowError('apartmentsArray should be an array');
  });

  it('should return correct hashMap', () => {
    expect(makeHashMap(apartments)).toEqual({
      1: { id: '1', foo: 'bar', isTuzShown: true },
      2: { id: '2', foo: 'bar', isTuzShown: false },
      3: { id: '3', foo: 'bar', isTuzShown: true },
      4: { id: '4', foo: 'bar', isTuzShown: true },
      5: { id: '5', foo: 'bar', isTuzShown: false },
      6: { id: '6', foo: 'bar', isTuzShown: true },
      7: { id: '7', foo: 'bar', isTuzShown: false },
      8: { id: '8', foo: 'bar', isTuzShown: true },
    });
  });
});
