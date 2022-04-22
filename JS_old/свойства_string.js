'use strict';

const str = 'tEsT to DO it';

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = 'Apple juice!';


console.log(fruit.indexOf('juice!')); //поиск под строки
console.log(fruit.indexOf('q')); //поиск буквы которой нет = -1

const logg = 'hello world!';

console.log(logg.slice(0,6)); //вырезать от n до n строки
console.log(logg.slice(-6,-1));

console.log(logg.substring(6)); // не поддерживает -x значения
console.log(logg.substr(6, 3)); // вторая n = сколько символов надо вырезать

const num = 12.2;
console.log(Math.round(num)); // математическое округление
// Math - библиотека JS, встроенная в браузере

const test = '13.8px';
console.log(parseInt(test));
console.log(parseFloat(test));