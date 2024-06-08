const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const deleteNum = document.querySelector('.delete')
const displayInput = document.querySelector('.displayInput')
const display = document.querySelector('.display')
const equal = document.querySelector('.equal')

let currentNum = ''
let prevNum = ''
let operatorDisplay = ''

number.forEach((number)=>{
    number.addEventListener('click', (e)=>{
        handleNumber(e.target.textContent)
        displayInput.textContent = currentNum
    })
})

operator.forEach((op)=>{
    op.addEventListener('click', (e)=>{
        handleOperator(e.target.textContent)
            let total = operation(currentNum, operatorDisplay, prevNum)
            displayInput.textContent = total
            currentNum = total
            currentNum = ''
            operatorDisplay = e.target.textContent
        })
})

equal.addEventListener('click', (e)=>{
    let total = operation(currentNum, operatorDisplay, prevNum)
    displayInput.textContent = total
    currentNum = total
    // console.log(operation(prevNum, operatorDisplay, currentNum))
})

clear.addEventListener('click', ()=>{
   prevNum = ''
   currentNum = ''
   operatorDisplay = ''
   displayInput.textContent = currentNum
 
})

deleteNum.addEventListener('click', (e)=>{
    currentNum = currentNum.slice(0, -1)
    displayInput.textContent = currentNum
})

function handleNumber(num) {
    if(currentNum.length <= 10) {
    currentNum += num
    }
}

function handleOperator(op){
        operatorDisplay = op
        prevNum = currentNum
        currentNum = ''
}

function operation(num1,operatorDisplay, num2) {
    num1 = Number(num1) 
    num2 = Number(num2) 
    switch (operatorDisplay) {
        case '+':
            return (num1 += num2)
            break;
        case '-':
            return num2 -= num1
            break;
        case '*':
            return num1 *= num2
            break;
        case '/':
            if(num2 === 0) {
                return '0'
            }else {
                return num1 /= num2
            }
            break;
    }
    num1 = num1.toString()
    num2 = num1.toString()
}

console.log(operation('5','-','2'))