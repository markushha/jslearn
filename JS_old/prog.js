'use strict';

const firstNum = +prompt('First number?', '')
const secondNum = +prompt('Second number?', '')
const operation = prompt('Select operation (/ ; * ; + ; -)', '')


if (operation == '/') {
    document.write(firstNum / secondNum)
} else if (operation == '*') {
    document.write(firstNum * secondNum)
} else if (operation == '+') {
    document.write(firstNum + secondNum)
} else if (operation == '-') {
    document.write(firstNum - secondNum)
} 