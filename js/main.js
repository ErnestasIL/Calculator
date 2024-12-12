import { buttons, clearButton, equalsButton } from "./domElements.js";
import {
  handleNumber,
  handleOperator,
  calculate,
  clearCalculator,
} from "./calculator.js";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (e.target.classList.contains("number")) {
      handleNumber(value);
    } else if (e.target.classList.contains("operator")) {
      handleOperator(value);
    }
  });
});
equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearCalculator);
