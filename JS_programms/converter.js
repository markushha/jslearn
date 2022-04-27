'use strict';

//USD = 1

let KZT = 443.81;
let EUR = 0.92;
let RUB = 82.35;

let amount = document.getElementsByTagName('input')[0].value;
let selectedFirstValue = document.getElementsByTagName('select')[0];
let selectedLastValue = document.getElementsByTagName('select')[1];

function convert() {
    if (selectedFirstValue == 'KZT') {
        return amount * KZT
    } else if (selectedFirstValue == 'EUR') {
        return amount * EUR
    } else if (selectedFirstValue == 'RUB') {
        return amount * RUB
    } else {
        console.log('Invalid value');
    }
};

function showResult() {
    if (amount != null && amount != 0 && amount != NaN && amount != '' && amount > 0 && amount < 100000000) {
        document.write(convert());
    } else {
        console.log('Invalid amount, amount need to be < 100000000 and > 0')
    }
};

showResult()