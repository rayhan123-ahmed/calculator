// ====== VARIABLES ======
let displayValue = ''
let firstOperand = null;
let secondOperand = null;
let currentOperatior = null
let shouldResetScreen = false;

// ====== SELECT DISPLAY ======
const display = document.querySelector(".display");



// ====== NUMBER BUTTONS ======
const numberButtons = document.querySelectorAll(
  ".buttons button:not(.operator):not(.equal):not(.clear)",
);






// ====== UPDATE DISPLAY ======
function updateDisplay() {
    display.value = displayValue
}