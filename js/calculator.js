import { add, subtract, multiply, divide } from "./mathOperations.js";
import { display } from "./domElements.js";
let currentValue = "0";
let operator = null;
let previousValue = null;
let isResultDisplayed = false;

export function handleNumber(number) {
  if (isResultDisplayed) {
    currentValue = number;
    isResultDisplayed = false;
  } else {
    currentValue = currentValue === "0" ? number : currentValue + number;
  }
  updateDisplay();
}

export function handleOperator(op) {
  if (operator && previousValue !== null && !isResultDisplayed) {
    calculate();
  }
  operator = op;
  previousValue = currentValue;
  currentValue = "0";
  isResultDisplayed = false;
}

export function calculate() {
  if (!operator || previousValue === null) return;

  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  switch (operator) {
    case "+":
      currentValue = add(prev, current).toString();
      break;
    case "-":
      currentValue = subtract(prev, current).toString();
      break;
    case "*":
      currentValue = multiply(prev, current).toString();
      break;
    case "÷":
      currentValue = divide(prev, current).toString();
      break;
  }
  operator = null;
  previousValue = null;
  isResultDisplayed = true;
  updateDisplay();
}
export function clearCalculator() {
  currentValue = "0";
  operator = null;
  previousValue = null;
  isResultDisplayed = false;
  updateDisplay();
}
function updateDisplay() {
  display.textContent = currentValue;
}
