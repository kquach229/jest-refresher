const reverseString = require('./reverseString');

test('it should return taC if given the word Cat', () => {
  expect(reverseString('Cat')).toBe('taC');
});
