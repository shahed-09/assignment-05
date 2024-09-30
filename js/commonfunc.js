// Number converter
function numConverter(id) {
  const number = document.getElementById(id).innerText;
  const finalNum = parseFloat(number);
  return finalNum;
}

// inputField Converter
function inputConverter(id) {
  const inputNum = parseFloat(document.getElementById(id).value);
  return inputNum;
}
