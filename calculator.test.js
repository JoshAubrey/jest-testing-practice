const calculator = require('./calculator')

test('add: 10 + 25 = 35', () => {
  expect(calculator.add(10, 25)).toBe(35)
})

test('subtract: 100 - 27 = 73', () => {
  expect(calculator.subtract(100, 27)).toBe(73)
})

test('multiply: 5 * 5 = 25', () => {
  expect(calculator.multiply(5, 5)).toBe(25)
})

test('divide: 100 / 5 = 20', () => {
  expect(calculator.divide(100, 5)).toBe(20)
})