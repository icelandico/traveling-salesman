const addPoint = document.querySelector('#add-point');
const calculatePath = document.querySelector('#calculate');

calculatePath.addEventListener('click', calculateHypot);
addPoint.addEventListener('click', createInputs)

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

function calculateHypot() {
  const inputValuesX = Array.from(document.querySelectorAll('.coordinate-x'));
  const inputValuesY = Array.from(document.querySelectorAll('.coordinate-y'));
  const valuesX = inputValuesX.map(item => parseFloat(item.value))
  const valuesY = inputValuesY.map(item => parseFloat(item.value))
  createPointsObject(valuesX, valuesY);
  showAllPaths()
}

function createPointsObject(x, y) {
  return Math.hypot(x[1] - x[0], y[1] - y[0]);
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
      for(var i = 0; i <= n-1; i++) {
        generate(n-1, array);
        swap(n % 2 == 0 ? i : 0 ,n-1);
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
