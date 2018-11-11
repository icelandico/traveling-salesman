const getCoordinates = require('./getCoordinates.js');

it('Coordinates', () => {
  expect(getCoordinates(
    [
      {id: 0, x: 2, y: 1},
      {id: 1, x: NaN, y: 10},
      {id: 2, x: 5, y: 2}
    ]
  )).toBe(1)
})

it('Coordinates', () => {
  expect(getCoordinates(
    [
      {id: 0, x: 2, y: 1},
      {id: 1, x: NaN, y: 10},
      {id: 2, x: NaN, y: 2}
    ]
  )).toBe(2)
})

it('Coordinates', () => {
  expect(getCoordinates(
    [
      {id: 0, x: 2, y: NaN},
      {id: 1, x: NaN, y: 10},
      {id: 2, x: NaN, y: 2}
    ]
  )).toBe(3)
})
