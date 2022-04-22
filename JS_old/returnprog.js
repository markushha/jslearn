'use strict';

const usdCurr = 443.81;
const eurCurr = 0;
const rubCurr = 0;


let amount = +prompt('Введите количество долларов которое перевести в KZT');
const currentValue = 'KZT';

function discount() {
    if (amount >= 100) {
        return amount / 200
    }
};

if (amount >= 100) {
    console.log('Ваша скидка равняется ' + discount() + '%');
} else if (amount <= 100) {
console.log('Извините, но акция не действует на данную сумму')
} else {console.log('Проверьте правильность набора суммы')
};

function convert(value, currency) {
    return value * currency
};

console.log(`${'Сумма без скидки -'} ${convert(amount, usdCurr)} ${currentValue}`);

function promotionDiv() {
    return convert(amount, usdCurr) / 100 * discount()
};

function convertDiscount() {
    return convert(amount, usdCurr) - promotionDiv()
};

console.log(`${'Ваша сумма с учетом скидки -'} ${convertDiscount()}${currentValue}`);