const addPoint = document.querySelector('#add-point');

addPoint.addEventListener('click', createInputs)

function createInputs() {
  const newInput = 
  `
<div class="coordinates-set">
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
}
