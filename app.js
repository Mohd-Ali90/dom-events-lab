/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let number1 = null
let number2 = null
let operator = null
let result = null

/*------------------------ Cached Element References ------------------------*/
const numberElements = document.querySelectorAll('.number');

const operatorElements = document.querySelectorAll('.operator')

const equals = document.querySelector('.equals')

const display = document.querySelector(".display")

console.log(numberElements)
console.log(operatorElements)
console.log(equals)



/*-------------------------------- Functions --------------------------------*/
function handleClickNumber(event) {
    if (!number1 && !number2 && !operator) {
        number1 = event.target.textContent
        display.textContent = number1
    }
    else if (number1 && !number2 && !operator) {
        number1 += event.target.textContent
        display.textContent = number1

    }
    else if (number1 && number2 && operator) {
        number2 += event.target.textContent
        display.textContent = number2

    }

    else if (number1 && !number2 && operator) {
        number2 = event.target.textContent
        display.textContent = number2

    }
    console.log(`num1: ` + number1)
    console.log(`num2 ` + number2)
    console.log(`operator ` + operator)
}

function handleClickOperator(event) {
    console.log('Clicked on Operator')

    if (event.target.textContent === 'C') {
        number1 = null
        number2 = null
        operator = null
        display.textContent = ' '
    } else if (number1 && !number2 && !operator) {
        operator = event.target.textContent
        display.textContent = operator
    }

    console.log(`num1: ` + number1)
    console.log(`num2 ` + number2)
    console.log(`operator ` + operator)
}

function handleClickEquals(event) {
    console.log('Clicked Equals')
    if (operator == '+') {
        result = Number(number1) + Number(number2)
        display.textContent = result
    }

    else if (operator == '-') {
        result = Number(number1) - Number(number2)
        display.textContent = result
    }

    else if (operator == '/') {
        result = Number(number1) / Number(number2)
        display.textContent = result
    }

    else if (operator == '*') {
        result = Number(number1) * Number(number2)
        display.textContent = result
    }
}



/*----------------------------- Event Listeners -----------------------------*/
equals.addEventListener('click', handleClickEquals)

for (let oneNumberElement of numberElements) {
    oneNumberElement.addEventListener('click', handleClickNumber)

}

for (let oneOperatorElement of operatorElements) {
    oneOperatorElement.addEventListener('click', handleClickOperator)
}