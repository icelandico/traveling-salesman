function getCoordinates(inputs){
  let emptyInputs = 0;
  inputs.forEach(item => Object.values(item).includes(NaN) ? emptyInputs += 1 : false);
  return emptyInputs;
}

module.exports = getCoordinates