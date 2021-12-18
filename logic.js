const screen = document.getElementById('screen');
const btnC = document.getElementById('btnC');
const btnSign = document.getElementById('btnSign');
const btnPercent = document.getElementById('btnPercent');
const btnDivide = document.getElementById('btnDivide');
const btnMultiply = document.getElementById('btnMultiply');
const btnMinus = document.getElementById('btnMinus');
const btnAdd = document.getElementById('btnAdd');
const btnComma = document.getElementById('btnComma');
const btnEqual = document.getElementById('btnEqual');
const numbers = Array.from(document.querySelectorAll('.btn-number'));
let finished = false;

function setScreen(value) {
  if (finished === false) {
    let newValue = getScreen() + value;
    screen.textContent = parseFloat(newValue);
  } else {
    screen.textContent = parseFloat(value);
    finished = false;
  }
}
function getScreen() {
  return screen.textContent;
}
//number 0-9 show the value in the screen
numbers.forEach(function numberFunction(item) {
  function onNumber(e) {
    setScreen(item.textContent);
  }
  return item.addEventListener('click', onNumber);
});
//button CE
btnC.addEventListener('click', onC);
function onC(e) {
  screen.textContent = 0;
}
//button +/-
btnSign.addEventListener('click', onSign);
function onSign(e) {
  screen.textContent = screen.textContent * -1;
}
//button %
btnPercent.addEventListener('click', onPercent);
function onPercent(e) {
  screen.textContent = screen.textContent / 100;
}
//button ,
btnComma.addEventListener('click', onComma);
function onComma(e) {
  if (getScreen().indexOf('.') === -1) {
    screen.textContent = screen.textContent + '.';
  } else {
  }
}
//OPERATIONS
let number1 = 0;
let number2 = 0;
let operation = ''; //div mul min add

//button /
btnDivide.addEventListener('click', onDivide);
function onDivide(e) {
  number1 = screen.textContent;
  finished = true;
  operation = 'div';
}
//button X
btnMultiply.addEventListener('click', onMultiply);
function onMultiply(e) {
  number1 = screen.textContent;
  finished = true;
  operation = 'mul';
}
//button -
btnMinus.addEventListener('click', onMinus);
function onMinus(e) {
  number1 = screen.textContent;
  finished = true;
  operation = 'min';
}
//button +
btnAdd.addEventListener('click', onAdd);
function onAdd(e) {
  number1 = screen.textContent;
  finished = true;
  operation = 'add';
}
//button =
btnEqual.addEventListener('click', onEqual);
function onEqual(e) {
  let result = 0;
  number2 = screen.textContent;
  if (operation === 'div') {
    result = number1 / number2;
  } else if (operation === 'mul') {
    result = number1 * number2;
  } else if (operation === 'min') {
    result = number1 - number2;
  } else if (operation === 'add') {
    result = parseFloat(number1) + parseFloat(number2);
  } else {
    result = screen.textContent;
  }
  number1 = 0;
  number2 = 0;
  operation = '';
  screen.textContent = result;
  finished = true;
}
window.addEventListener('keydown', onKey);
function onKey(e) {
  if (e.key === /[A-z]/) {
    console.log('invalid key');
  }
  if (e.key === '.') {
    onComma(e);
  } else if (e.key === 'Backspace') {
    onC(e);
  } else if (e.key === '%') {
    onPercent(e);
  } else if (e.key === '/') {
    onDivide(e);
  } else if (e.key === '*') {
    onMultiply(e);
  } else if (e.key === '-') {
    onMinus(e);
  } else if (e.key === '+') {
    onAdd(e);
  } else if (e.key === 'Enter') {
    onEqual(e);
  } else {
    setScreen(e.key);
  }
}
