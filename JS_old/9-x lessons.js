'use strict';

//9 урок - операторы в js
console.log ('arr' + ' - object');
console.log(4 + ' - number');
console.log(4 + +"5");

let incr = 10,
    dcr = 10;

incr++; //postfix
--dcr; //prefix

console.log(incr);
console.log(dcr);

console.log(11%2)

console.log(2 + 2 * 2 == '6')
console.log(2*4 === '8') // === это строгое сравнение

const isChecked = true,
      isClosed = false;

console.log(isChecked || isClosed);
console.log(isChecked && !isClosed);

// && - и это и то...; || или это или то...
