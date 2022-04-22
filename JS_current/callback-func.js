'use strict';

function first() {
    setTimeout(function() {
        console.log(1)
    }, 500)
};

function second() {
    console.log(2)
};

first();
second()

//callback функции ниже
function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log(`I've passed this lesson!`);
}

learnJS('JavaScript', done);