'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);

console.log(calc(4,3));
console.log(calc(6,10));
console.log(calc(15,28));

function calc(a, b) {
    return (a + b);
}

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

let foo = function() {
    console.log('Hello :3');
};

foo()

const calc = (a, b) => { 
    console.log(111);
    return a + b;
};

calc()

