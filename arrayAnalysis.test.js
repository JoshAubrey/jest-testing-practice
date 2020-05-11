const arrayAnalysis = require('./arrayAnalysis')

test('return object with average, min, max and length of array', () => {
    expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
        })
})