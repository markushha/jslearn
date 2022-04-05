'use strict';

const a = +prompt('how much is 87 - 37?', '');

if (a <= 49) {
    console.log('WroNg!')
}   else if (a >= 51) {
    console.log('Wrong number!')
}   else if (a == 50) {
    document.write('Yes! Here you are :)')
}

(a === 50) ? console.log('OK!') : console.log('wrong!')

switch (a) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 50:
        console.log('right');
        break;
    default:
}