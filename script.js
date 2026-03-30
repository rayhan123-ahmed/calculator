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
       displayValue += button.textContent
       shouldResetScreen = false
    } else {
      displayValue += button.textContent
    }
    updateDisplay()
  });
});

// ====== OPERATOR BUTTONS ======
const operatorButtons = document.querySelectorAll(".operator");

// ====== BUILD OPERATOR SYSTEM ======
operatorButtons.forEach(button => {
  button.addEventListener('click',()=>{
    if (currentOperatior !== null && !shouldResetScreen) {
      operate()
    }
    firstOperand = displayValue
    currentOperatior = button.textContent;
    
    displayValue += ` ${currentOperatior} `  
    shouldResetScreen = true
    updateDisplay()
  })
})

// ====== CREAT OPERATE FUNTION======
function operate() {
   if (!currentOperatior) return

  let parts = displayValue.split(` ${currentOperatior} `)
  firstOperand = parts [0];
  secondOperand = parts [1] || firstOperand

  if (currentOperatior === '+') {
    displayValue = Number(firstOperand) + Number(secondOperand)
  }
  if (currentOperatior === '-') {
    displayValue = Number(firstOperand) - Number(secondOperand);
  }
  if (currentOperatior === "*") {
    displayValue = Number(firstOperand) * Number(secondOperand);
  }
  if (currentOperatior === "/") {
    displayValue = Number(firstOperand) / Number(secondOperand)
  }

  firstOperand = displayValue;
  currentOperatior = null
  shouldResetScreen = true
  updateDisplay()
}

// ====== EQUAL BUTTONS ======
const equalButton = document.querySelector('.equal');
// ====== CREAT A EQUAL SYSTEM ======
equalButton.addEventListener('click',()=>{
    operate();
    currentOperatior = null
    shouldResetScreen = true
})

// ====== UPDATE DISPLAY ======
function updateDisplay() {
    display.value = displayValue
}