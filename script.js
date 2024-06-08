const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const deleteNum = document.querySelector('.delete')
const displayInput = document.querySelector('.displayInput')
const display = document.querySelector('.display')
const equal = document.querySelector('.equal')

let firstNum = ''
let secondNum = ''
let oprat = ''

number.forEach((number)=>{
    number.addEventListener('click', (e)=>{
        handleNumber(e.target.textContent)
        displayInput.textContent = firstNum
    })
})

operator.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        handleOperator(e.target.textContent)
        displayInput.textContent = oprat
    })
})

equal.addEventListener('click', (e)=>{
    return opration(firstNum, oprat, secondNum)
})

clear.addEventListener('click', ()=>{
    display.textContent = ''
    firstNum = ''
    secondNum = ''
    oprat = ''
    
})

function handleNumber(num) {
    firstNum += num
}

function handleOperator(num){
    oprat += num;
    firstNum = secondNum
    secondNum = ''
}

function opration(num1,oprat, num2) {
    switch (oprat) {
        case '+':
            return +num1 + +num2
            break;
        case '-':
            return num1 - num2
            break;
        case '*':
            return num1 * num2
            break;
        case '/':
            return num1 / num2
            break;
    }
}