const sum = require('./sum') // Importing the sum function from js.js

test('finds sum', () => { // Testing if sum function works correctly
    expect(sum(2, 4)).toBe(6)
})
