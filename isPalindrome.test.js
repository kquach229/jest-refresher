const isPalindrome = require('./isPalindrome');

test('should return true if is racecar is palindrome', () => {
  expect(isPalindrome('Racecar')).toBe(true);
});
test('rapper should return false', () => {
  expect(isPalindrome('rapper')).toBe(false);
});
