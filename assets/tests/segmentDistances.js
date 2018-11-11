function segmentDistances(segments) {
  const sumDistances = segments.map(segment => segment.reduce((a, b) => a + b));
  return sumDistances
}

module.exports = segmentDistances
