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

// ====== BUILD NUMBER SYSTEM ======
numberButtons.forEach(button =>{
  button.addEventListener('click',()=>{
    if (display.value === '0') {
       display.value = button.textContent
    } else {
      display.value += button.textContent
    }
    updateDisplay()
  });
});




// ====== UPDATE DISPLAY ======
function updateDisplay() {
    display.value = displayValue
}