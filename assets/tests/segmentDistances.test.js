const segmentDistances = require('./segmentDistances.js');

const segmentsOne = 
  [
    [20, 5, 1, 4],
    [7, 18, 4, 20]
  ]

const segmentsTwo = 
  [
    [1, 7, 3, 10],
    [9, 11, 4, 2]
  ]

const segmentsThree = 
  [
    [5, 4, 2, 12],
    [1, 3, 1, 8]
  ]

it('Segments distances Length', () => {
  expect(segmentDistances(segmentsOne)).toEqual([30, 49])
})

it('Segments distances Length', () => {
  expect(segmentDistances(segmentsTwo)).toEqual([21, 26])
})

it('Segments distances Length', () => {
  expect(segmentDistances(segmentsThree)).toEqual([23, 13])
})