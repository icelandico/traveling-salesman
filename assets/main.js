const addPoint = document.querySelector('#add-point');
const calculatePath = document.querySelector('#calculate');


calculatePath.addEventListener('click', calculateHypot);
addPoint.addEventListener('click', createInputs)

let counter = 2;
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
  createPointsObject(valuesX, valuesY)
}

function createPointsObject(x, y) {
  return Math.hypot(x[1] - x[0], y[1] - y[0]))
}

function showCombinations(Arr){
  var permutations = [];
  var A = Arr.slice();

  function swap(a,b){
    var tmp = A[a];
    A[a] = A[b];
    A[b] = tmp;
  }

  function generate(n, A){
    if (n == 1){
      permutations.push(A.slice());
    } else {
      for(var i = 0; i <= n-1; i++) {
        generate(n-1, A);
        swap(n % 2 == 0 ? i : 0 ,n-1);
      }
    }
  }
  generate(A.length, A);
  return permutations;
}


function showAllPaths(points){
  var pointsArray = generatePermutations(points.slice(1));
  for (var i = 0; i < pointsArray.length; i++){
    pointsArray[i].unshift(points[0]);
    pointsArray[i].push(points[0]);
  }
  return pems;
}
