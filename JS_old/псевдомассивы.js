'use strict';

// методы для массивов

const arr = [1, 2, 3, 6, 8, 10];

arr.pop(); // удалить последний элемент массива
arr.push('good'); // добавить элемент в конец массива

console.log(arr);
console.log(arr[5]);

for (let i = 0; i < arr.length; i++) { //arr.length ( длина массива)
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value)
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside of ${arr}`);
});
