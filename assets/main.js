const addPoint = document.querySelector('#add-point');
const calculatePath = document.querySelector('#calculate');

calculatePath.addEventListener('click', calculateDistances);
addPoint.addEventListener('click', createInputs);

let counter = 1;
function createInputs() {
  const newInput = 
    `
    <p>${counter}.</p>
    <div class="coordinates-set" id=${counter}>
      <label>
        X
        <input type="text" class="coordinate-x">
      </label>
      <label>
        Y
        <input type="text" class="coordinate-y">
      </label>
    </div>
    `
  const inputContainer = document.querySelector('.coordinates-values');
  inputContainer.insertAdjacentHTML('beforeend', newInput);
  counter += 1;
}

function calculateDistances() {
  const coordinates = getCoordinates()
  const paths = showAllPaths();
  const segments = middleSegments(paths)
  showPathsNumber(paths)
  console.log(coordinates)
  console.log(paths)
  console.log(segments)
  const segmentDistances = segments.map(segment => segment.map(pair => Math.hypot(coordinates[pair[1]].x - coordinates[pair[0]].x, coordinates[pair[1]].y - coordinates[pair[0]].y)))
  console.log(segmentDistances)
}

function middleSegments(segments) {
  const pathsSegments = segments.map(path => {
    let result = [];
    for (let i = 0; i < path.length - 1; i++) {
      result.push([path[i], path[i + 1]])
    }
    return result
  })
  return pathsSegments
}

function showPathsNumber(paths) {
  const paragraphPaths = document.querySelector('.paths-number');
  paragraphPaths.textContent += paths.length;
}

function getCoordinates() {
  const inputValuesX = Array.from(document.querySelectorAll('.coordinate-x'));
  const inputValuesY = Array.from(document.querySelectorAll('.coordinate-y'));
  const valuesX = inputValuesX.map(item => parseFloat(item.value));
  const valuesY = inputValuesY.map(item => parseFloat(item.value));
  const pointsObjects = valuesX.map((x, index) => ({ id: index, x: x, y: valuesY[index]}));
  return pointsObjects
}

function showCombinations(points){
  let combinations = [];
  let array = points.slice();

  function swap(a,b){
    let temporary = array[a];
    array[a] = array[b];
    array[b] = temporary;
  }

  function generate(n, A){
    if (n == 1){
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

function showAllPaths(){
  const pointsElements = Array.from(document.querySelectorAll('.coordinates-set'));
  const points = pointsElements.map(item => parseInt(item.id));
  let pointsArray = showCombinations(points.slice(1));
  for (let i = 0; i < pointsArray.length; i++){
    pointsArray[i].unshift(points[0]);
    pointsArray[i].push(points[0]);
  }
  return pointsArray;
}
