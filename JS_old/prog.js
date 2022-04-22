'use strict';

let firstName = prompt('Enter your first name.', '');
let lastName = prompt('Enter your last name.', '');

if (firstName != null && firstName != '' && firstName.length > 1 && firstName.length < 16 && lastName != null && lastName.length > 1 && lastName.length < 16 && lastName != '') {
    console.log(`${firstName} ${lastName}`)
} else {
    console.log('please try again :3')
}

