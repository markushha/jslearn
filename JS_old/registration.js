'use strict';

const username = prompt('Enter your username - ', '');
const password = prompt('OK, Enter your password -', '');

if (username != '' && username != null && username.length < 10 && password != '' && password != null && password != '123' && password.length < 8) {
    document.write(`${username} ${password}`)
} else {
    document.write('Wrong username or password')
};

const userDB = {
    userName: username,
    userPassword: password
};

console.log(`${userDB.userName} ${userDB.userPassword}`);