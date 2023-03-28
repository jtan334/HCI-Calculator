let calculation="";
let expression="";
let displayHistory =""
let mode = "NOBEDMAS";

let btnc = document.getElementById("c")
btnc.addEventListener("click", clickc);

let btn0 = document.getElementById("0")
btn0.addEventListener("click", click0);

let btn1 = document.getElementById("1")
btn1.addEventListener("click", click1);

let btn2 = document.getElementById("2")
btn2.addEventListener("click", click2);

let btn3 = document.getElementById("3")
btn3.addEventListener("click", click3);

let btn4 = document.getElementById("4")
btn4.addEventListener("click", click4);

let btn5 = document.getElementById("5")
btn5.addEventListener("click", click5);

let btn6 = document.getElementById("6")
btn6.addEventListener("click", click6);

let btn7 = document.getElementById("7")
btn7.addEventListener("click", click7);

let btn8 = document.getElementById("8")
btn8.addEventListener("click", click8);

let btn9 = document.getElementById("9")
btn9.addEventListener("click", click9);

let btndiv = document.getElementById("/")
btndiv.addEventListener("click", clickdiv);

let btnmult= document.getElementById("*")
btnmult.addEventListener("click", clickmult);

let btnplus = document.getElementById("+")
btnplus.addEventListener("click", clickplus);

let btnminus = document.getElementById("-")
btnminus.addEventListener("click", clickminus);

let btnequal = document.getElementById("=")
btnequal.addEventListener("click", clickequal);

let btnleftbrack = document.getElementById("(")
btnleftbrack.addEventListener("click", clickleftbrack);

let btnrightbrack = document.getElementById(")")
btnrightbrack.addEventListener("click", clickrightbrack);

let btnrpm = document.getElementById("rpm")
btnrpm.addEventListener("click", clickrpm);

let btnbed = document.getElementById("BED")
btnbed.addEventListener("click", clickbed);

let btnnobed = document.getElementById("NOBEDMAS")
btnnobed.addEventListener("click", clicknobed);


function clickc(){
    console.log("c")
    
        calculation="";
    
        totalNum =0
        clearDisplay();
}

function click0(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "0";

    calculation += num;
    
        updateRPNDisplay("0")
    }
    else{

        let num = "0";

        calculation += num;
        
            updateDisplay(num);

    }
   
}

function click1(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "1";

    calculation += num;
    
        updateRPNDisplay("1")
    }
    else{
    let num = "1";

    calculation += num;
    
        updateDisplay(num);
 
}
}

function click9(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "9";

    calculation += num;
    
        updateRPNDisplay("9")
    }
    else{
    let num = "9";

    calculation += num;
    
        updateDisplay(num);
 
}
}

function click2(){
    onNextInputClear();


    if (mode == "RPN") {
        let num = "2";

    calculation += num;
    
        updateRPNDisplay("2")
    }
    else{
    let num = "2";

    calculation += num;
    
        updateDisplay(num);
 
}
}
function click3(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "3";

    calculation += num;
    
        updateRPNDisplay("3")
    }
    else{

    let num = "3";

    calculation += num;
    
        updateDisplay(num);
 
}
}
function click4(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "4";

    calculation += num;
    
        updateRPNDisplay("4")
    }
    else{
    let num = "4";

    calculation += num;
    
        updateDisplay(num);
 
}
}
function click5(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "5";

    calculation += num;
    
        
        updateRPNDisplay("5")
    }
    else{
    let num = "5";

    calculation += num;
    
        updateDisplay(num);
 
}
}
function click6(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "6";

    calculation += num;
    
        updateRPNDisplay("6")
    }
    else{
    let num = "6";

    calculation += num;
    
        updateDisplay(num);
 
}
}
function click7(){
    onNextInputClear();

    
    if (mode == "RPN") {
        let num = "7";

    calculation += num;
    
        updateRPNDisplay("7")
    }
    else{
    let num = "7";

    calculation += num;
    
        updateDisplay(num);
 
}
}
function click8(){
    onNextInputClear();

    if (mode == "RPN") {
        let num = "8";

    calculation += num;
    
        updateRPNDisplay("8")
    }
    else{
    let num = "8";

    calculation += num;
    
        updateDisplay(num);
 
}
}

function clickdiv(){
    onNextInputClear();

    if (mode == "RPN") {
        calculation = calculation.concat("/");
        console.log(calculation);
        clearDisplay()
        updateDisplay(evaluateRPN(calculation))
    }
    else{
    let num = "/";

    calculation += num;
    
        updateDisplay(num);
}
}

function clickmult(){
    onNextInputClear();


    if (mode == "RPN") {
        calculation = calculation.concat("*");
        console.log(calculation);
        clearDisplay()
        updateDisplay(evaluateRPN(calculation))
    }
    else{
    let num = "*";

    calculation += num;
    
        updateDisplay(num);
}
}

function clickplus(){
    onNextInputClear();

    if (mode == "RPN") {
        calculation = calculation.concat("+");
        console.log(calculation);
        clearDisplay()
        updateDisplay(evaluateRPN(calculation))
    }
    else{
    let num = "+";

    calculation += num;
    
        updateDisplay(num);
}
}

function clickminus(){
    onNextInputClear();

    if (mode == "RPN") {
        calculation = calculation.concat("-");
        console.log(calculation);
        clearDisplay()
        updateDisplay(evaluateRPN(calculation))
    }
    else{
    let num = "-";

    calculation += num;
    
        updateDisplay(num);
}
}

function clickleftbrack(){
    onNextInputClear();

    let num = "(";

    calculation += num;
    
        updateDisplay(num);
}

function clickrightbrack(){
    onNextInputClear();

    let num = ")";

    calculation += num;
    
        updateDisplay(num);
}

function clickequal(){
    
    if(mode==="NOBEDMAS"){

        let num = "=";

        calculation += num;
        let ans =evaluateINFIX(calculation);
        console.log(ans)

        clearDisplay()

        updateDisplay(ans);

    }

    else if(mode==="RPN"){
        let num = "enter";

        calculation = calculation.concat(num);
       updateRPNDisplay(evaluateRPN(calculation));

        clearDisplay()

    }

    else if(mode==="BED"){

        

       
        let ans =evaluateBED(calculation);
        console.log(ans)

        clearDisplay()

        updateDisplay(ans);

    }

       
}
function clickrpm(){
    mode = "RPN"
    let leftbrack =document.getElementById("(")
    leftbrack.innerHTML=""

    let rightbrack =document.getElementById(")")
    rightbrack.innerHTML=""

    
    let enter =document.getElementById("=")
    enter.innerHTML="enter"
 
}

function clickbed(){
    mode = "BED"
    let leftbrack =document.getElementById("(")
    leftbrack.innerHTML="("

    let rightbrack =document.getElementById(")")
    rightbrack.innerHTML=")"

    let enter =document.getElementById("=")
    enter.innerHTML="="
 
}
function clicknobed(){
    mode = "NOBEDMAS"

    let enter =document.getElementById("=")
    enter.innerHTML="="

    let leftbrack =document.getElementById("(")
    leftbrack.innerHTML=""

    let rightbrack =document.getElementById(")")
    rightbrack.innerHTML=""
}

function updateRPNDisplay(display){
    let displayValue = document.getElementById("calc-operation");
    
        displayValue.innerHTML+=display;

    
}
function updateDisplay(display){
    let displayValue = document.getElementById("typed");
    
        displayValue.innerHTML+=display;

    
}

function clearDisplay(){
    let displayValue = document.getElementById("typed");
    let displayHistoryDiv = document.getElementById("calc-operation");
    console.log(calculation)
    displayHistoryDiv.innerHTML= calculation;
    
        displayValue.innerHTML="";
        if(mode!="RPN"){
            calculation = "";

        }
   
    
}

function onNextInputClear(){
    
    let displayValue = document.getElementById("typed");
    
    console.log(calculation)
    if(displayValue!=""&&calculation==0)
    clearDisplay()

        }
   





/** Evaluates an expression in RPN mode */
function evaluateRPN(expression) {
const tokens = expression.match(/[\d\.]+|[+\-*/]|enter/g);
const stack = [];

for (let i = 0; i < tokens.length; i++) {
const token = tokens[i];

if (!isNaN(token)) { // if token is a number
    stack.push(parseFloat(token));
} else if (token === '*') {
    const operand2 = stack.pop();
    const operand1 = stack.pop();
    stack.push(operand1 * operand2);
} else if (token === '/') {
    const operand2 = stack.pop();
    const operand1 = stack.pop();
    stack.push(operand1 / operand2);
} else if (token === '+') {
    const operand2 = stack.pop();
    const operand1 = stack.pop();
    stack.push(operand1 + operand2);
} else if (token === '-') {
    const operand2 = stack.pop();
    const operand1 = stack.pop();
    stack.push(operand1 - operand2);
} else if (token === 'enter') {
    // ignore "enter" operation
} else {
    throw new Error(`Invalid token: ${token}`);
}
}

if (stack.length === 1) {
return stack.pop();
} else {
throw new Error('Invalid expression');
}
}
/** Evaluates an expression in INFIX mode */
function evaluateINFIX(expression) {
let infixCalculation = calculation.replace('\xD7','*').replace('\xF7', '/');
expression = infixCalculation.replace(/\s+/g, '');

// Split the expression into an array of operands and operators
let tokens = expression.split(/([+\-*\/])/);

// Initialize the result to the first operand
let result = parseFloat(tokens[0]);

// Apply each operator to the result and the next operand
for (let i = 1; i < tokens.length; i += 2) {
let operator = tokens[i];
let operand = parseFloat(tokens[i+1]);

switch (operator) {
  case '+':
    result += operand;
    break;
  case '-':
    result -= operand;
    break;
  case '*':
    result *= operand;
    break;
  case '/':
    result /= operand;
    break;
}
}

return result;
}

/** Evaluates an expression in OPR mode */
function evaluateBED(expression) {
    let oprCalculation = calculation.replace('\xD7', '*').replace('\xF7', '/');
    // Remove all white spaces from the expression
    expression = oprCalculation.replace(/\s+/g, '');
  
    // Create two stacks - one for numbers and one for operators
    const numbersStack = [];
    const operatorsStack = [];
  
    // Define operator precedence
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '(': 0,
      ')': 0,
    };
  
    // Helper function to apply an operator on two numbers
    function applyOperator(operator) {
      const b = numbersStack.pop();
      const a = numbersStack.pop();
      switch (operator) {
        case '+': numbersStack.push(a + b); break;
        case '-': numbersStack.push(a - b); break;
        case '*': numbersStack.push(a * b); break;
        case '/': numbersStack.push(a / b); break;
      }
    }
  
    // Iterate over each character in the expression
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
  
      if (char === '(') {
        operatorsStack.push(char);
      } else if (char === ')') {
        while (operatorsStack.length > 0 && operatorsStack[operatorsStack.length - 1] !== '(') {
          applyOperator(operatorsStack.pop());
        }
        operatorsStack.pop();
      } else if ('+-*/'.includes(char)) {
        while (operatorsStack.length > 0 && precedence[char] <= precedence[operatorsStack[operatorsStack.length - 1]]) {
          applyOperator(operatorsStack.pop());
        }
        operatorsStack.push(char);
      } else {
        // Extract the full number from the string
        let number = '';
        while (i < expression.length && !'()/*+-'.includes(expression[i])) {
          number += expression[i];
          i++;
        }
        i--;
  
        // Convert the number from string to a number and add it to the numbers stack
        numbersStack.push(Number(number));
      }
    }
  
    // Apply any remaining operators
    while (operatorsStack.length > 0) {
      applyOperator(operatorsStack.pop());
    }
  
    // The final result is the top number in the numbers stack
    return numbersStack.pop();
}