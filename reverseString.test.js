const reverseString = require('./reverseString')

test('takes cat and returns tac', () => {
  expect(reverseString('cat')).toBe('tac')
})