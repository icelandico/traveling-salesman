class CoordinateSolver {
  counter = 1;
  addPoint = document.querySelector('#add-point');
  clearValues = document.querySelector('#clear');
  inputContainer = document.querySelector('.coordinates__inputs-container');
  calculatePath = document.querySelector('#calculate');
  removeCoordinatesButton = document.querySelectorAll('.coordinates__remove');
  pointCoordinates = [];

  constructor() { }

  initListeners() {
    this.calculatePath.addEventListener('click', () => this.getPath());
    this.addPoint.addEventListener('click', () => this.createInput());
    this.clearValues.addEventListener('click', () => this.clearEntries());
    this.removeCoordinatesButton.forEach(button => button.addEventListener('click', () => this.removeCoordinates()))
  }

  createInput() {
    if (!this.areInputsNotEmpty()) {
      alert('Fill X and Y');
      return;
    }
    this.inputContainer.insertAdjacentHTML('beforeend', inputsTemplate(this.counter));
    this.counter += 1;
    drawPointsLayer(this.getCoordinates())
  }

  removeCoordinates() {

  }

  areInputsNotEmpty() {
    const lastInputs = document.querySelectorAll(`.coordinates__set-${this.counter - 1} .coords`);
    return Array.from(lastInputs).map(el => !!el.value).filter(Boolean).length === 2;
  }

  getPath() {
    const coordinates = this.getCoordinates();
    let emptyInputs = 0;
    coordinates.forEach(item => Object.values(item).includes(NaN) ? emptyInputs += 1 : false);
    emptyInputs || coordinates.length === 1 ? alert('Fill all inputs or type at least two points!') : this.calculateDistances(coordinates);
    drawPointsLayer(this.getCoordinates())
  }

  calculateDistances(coordinates) {
    const paths = this.showAllPaths();
    const segments = this.middleSegments(paths)
    this.showPathsNumber(paths)
    const segmentDistances = segments.map(segment =>
        segment.map(pair =>
            Math.hypot(coordinates[pair[1]].x - coordinates[pair[0]].x, coordinates[pair[1]].y - coordinates[pair[0]].y)
        ));
    const sumDistances = segmentDistances.map(segment => segment.reduce((a, b) => a + b));
    this.getShortestPathStats(sumDistances, paths, segmentDistances)
  }

  middleSegments(segments) {
    return segments.map(path => {
      let result = [];
      for (let i = 0; i < path.length - 1; i++) {
        result.push([path[i], path[i + 1]])
      }
      return result
    })
  }

  getShortestPathStats(distances, paths, segments) {
    const shortestDistance = Math.min.apply(null, distances);
    const shortestPathIndex = distances.indexOf(shortestDistance);
    const shortestPath = paths[shortestPathIndex];
    const shortestPathSegments = segments[shortestPathIndex];
    this.showShortestPathStats(shortestPath, shortestDistance, shortestPathSegments)
  }

  showShortestPathStats(path, distance, segments) {
    this.clearParagraphValues();
    const paragraphDistance = document.querySelector('.path-distance');
    const paragraphOrder = document.querySelector('.path-order');
    const pathsSegments = document.querySelector('.path-segments');
    path.forEach(point => {
      paragraphOrder.innerHTML +=  ' ' + point
    });
    segments.forEach(segment => {
      pathsSegments.innerHTML += ' ' + parseFloat(segment.toFixed(2))
    })
    paragraphDistance.innerHTML = parseFloat(distance.toFixed(2));
  }

  showPathsNumber(paths) {
    const paragraphPaths = document.querySelector('.paths-number');
    paragraphPaths.innerHTML = paths.length;
  }

  getCoordinates() {
    const inputValuesX = Array.from(document.querySelectorAll('.coordinate-x'));
    const inputValuesY = Array.from(document.querySelectorAll('.coordinate-y'));
    const valuesX = inputValuesX.map(item => parseFloat(item.value));
    const valuesY = inputValuesY.map(item => parseFloat(item.value));
    return valuesX.map((x, index) => ({ id: index, x: x, y: valuesY[index] }));
  }

  showCombinations(points){
    let combinations = [];
    let array = points.slice();

    function swap(a,b){
      let temporary = array[a];
      array[a] = array[b];
      array[b] = temporary;
    }

    function generate(n){
      if (n === 1){
        combinations.push(array.slice());
      } else {
        for (let i = 0; i <= n - 1; i++) {
          generate(n - 1, array);
          swap(n % 2 === 0 ? i : 0, n - 1);
        }
      }
    }
    generate(array.length, array);
    return combinations;
  }

  showAllPaths(){
    const pointsElements = Array.from(document.querySelectorAll('.coordinates__set-container'));
    const points = pointsElements.map(item => parseInt(item.id));
    let pointsArray = this.showCombinations(points.slice(1));
    for (let i = 0; i < pointsArray.length; i++){
      pointsArray[i].unshift(points[0]);
      pointsArray[i].push(points[0]);
    }
    return pointsArray;
  }

  clearParagraphValues() {
    const paragraphs = document.querySelectorAll('.path-info');
    paragraphs.forEach(paragraph => paragraph.innerHTML = '')
  }

  clearEntries() {
    const results = document.querySelectorAll('.result');
    results.forEach(item => {
      item.innerHTML = ''
    })
    this.removeInputs()
    drawPointsLayer(this.getCoordinates())
  }

  removeInputs() {
    const addedElements = document.querySelectorAll('.coordinates__set-added');
    const initialInput = document.querySelectorAll('.coords');
    addedElements.forEach(item => item.remove());
    initialInput.forEach(item => item.value = '');
    this.counter = 1;
  }

}

const coordinateSolver = new CoordinateSolver();
coordinateSolver.initListeners();