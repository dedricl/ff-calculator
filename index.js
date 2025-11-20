let numString1 = "";
let numString2 = "";
let operator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multipy(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function clearScreen() {
  numString1 = "";
  numString2 = "";
  operator = "";
  setDisplayText("");
}

function operation() {
  let operatorSymbol = operator;
  let num1 = parseFloat(numString1);
  let num2 = parseFloat(numString2);
  let result;

  if (operatorSymbol === "+") {
    result = add(num1, num2);
  } else if (operatorSymbol === "-") {
    result = subtract(num1, num2);
  } else if (operatorSymbol === "x") {
    result = multipy(num1, num2);
  } else if (operatorSymbol === "/") {
    result = divide(num1, num2);
  } else {
    setDisplayText("Error");
  }
  setDisplayText(result);
}

function handleNumberClick(num) {
  if (operator) {
    numString2 = numString2 + num;
  } else {
    numString1 = numString1 + num;
  }
  setDisplayText(numString1 + operator + numString2);
}

function handleOperatorClick(newOperator) {
  operator = newOperator;
  setDisplayText(numString1 + operator);
}

function setDisplayText(displayText) {
  const displayTextElement = document.querySelector(".display-text");
  displayTextElement.textContent = displayText;
}
