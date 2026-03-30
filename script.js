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

// ====== OPERATOR BUTTONS ======
const operatorButtons = document.querySelectorAll(".operator");

// ====== BUILD OPERATOR SYSTEM ======
operatorButtons.forEach(button => {
  button.addEventListener('click',()=>{
    if (currentOperatior !== null) {
      operate()
    }
    
    firstOperand = displayValue
    currentOperatior = button.textContent;
    shouldResetScreen = true

  })
})

// ====== CREAT OPERATE FUNTION======
function operate() {
  secondOperand = displayValue;

  if (currentOperatior === '+') {
    displayValue = Number(firstOperand) + Number(secondOperand)
  }
  if (currentOperatior === '-') {
    displayValue = Number(firstOperand) - Number(secondOperand);
  }
  if (currentOperatior === "×") {
    displayValue = Number(firstOperand) * Number(secondOperand);
  }
  if (currentOperatior === "÷") {
    displayValue = Number(firstOperand) / Number(secondOperand)
  }

  firstOperand = displayValue;
  updateDisplay()
}

// ====== UPDATE DISPLAY ======
function updateDisplay() {
    display.value = displayValue
}