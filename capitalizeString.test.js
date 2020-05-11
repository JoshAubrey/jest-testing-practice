const capitalizeString = require('./capitalizeString')

test('takes cat and returns Cat', () => {
  expect(capitalizeString('cat')).toBe('Cat')
})