let numString1 = "";
let numString2 = "";
let operator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  num1 - num2;
}

function multipy(num1, num2) {
  num1 * num2;
}

function divide(num1, num2) {
  num1 / num2;
}

function clear() {
  numString1 = 0;
  numString2 = 0;
  operator = 0;
  clearScreen();
}

function operation(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multipy(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return "Error";
  }
}

function handleNumberClick(num) {
  numString1 = numString1 + num;
  console.log(numString1);
}

function handleOperatorClick(newOperator) {
  operator = newOperator;
  console.log(operator);
}
