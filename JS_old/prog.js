'use strict';

let a = +prompt('Enter first N')
let b = +prompt('Enter second N')
let c = prompt('Select operation ( * , / , + , - )')

function sum(a, b) {
    return (a + b)
}

function deduct(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}

if (c == '/') {
    divide(a, b);
} else if (c == '*') {
    multiply(a, b);
} else if (c == '-') {
    debuct(a, b);
} else if (c == '+') {
    sum(a, b);
} else {
    console.log('Error');
}