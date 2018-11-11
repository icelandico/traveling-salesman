const getCoordinates = require('./getCoordinates.js');

if (getCoordinates(
  [
    {id: 0, x: 2, y: 1},
    {id: 1, x: NaN, y: 10},
    {id: 2, x: 5, y: 2}
  ]
) !== 1) {
  throw new Error('Check fail Example 1')
}

if (getCoordinates(
  [
    {id: 0, x: 2, y: 1},
    {id: 1, x: NaN, y: 10},
    {id: 2, x: NaN, y: 2}
  ]
) !== 2) {
  throw new Error('Check fail Example 2')
}

if (getCoordinates(
  [
    {id: 0, x: 2, y: NaN},
    {id: 1, x: NaN, y: 10},
    {id: 2, x: NaN, y: 2}
  ]
) !== 3) {
  throw new Error('Check fail Example 3')
}

