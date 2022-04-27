'use strict';

const options = {
    firstName: 'Mark',
    lastName: 'Inger',
    age: 14,
    favouriteColor: 'yellow',
    movieDB: {
        movieFirst: 'morbius',
        movieSecond: 'Spider-Man'
    },
    makeMethod: function() {
        console.log('test');
    }
};
options.makeMethod();

console.log(Object.keys(options)); // в массив
console.log(Object.keys(options).length)

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Опция ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Опция ${key} имеет значение ${options[key]}`);
    }
}
