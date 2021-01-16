export const inputsTemplate = (counter) => {
  return `
      <div class="coordinates__set-container coordinates__set-${counter} coordinates__set-added" id="${counter}">
        <span class="coordinates__set-counter">${counter}.</span>
        <label>
          X
          <input type="text" class="coords coordinate-x">
        </label>
        <label>
          Y
          <input type="text" class="coords coordinate-y">
        </label>
        ${
          counter >= 1 &&
          '<span class="button button--danger coordinates__remove">Remove</span>'
        }
      </div>    
      `;
};
