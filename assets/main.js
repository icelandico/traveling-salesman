const addPoint = document.querySelector('#add-point');

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
