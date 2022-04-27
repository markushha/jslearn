// Место для первой задачи
function getTimeFromMinutes(minutes) {
    if (minutes != null && minutes != '' && minutes > 0) {
        return minutes / 60
    } else {
        console.log('invalid data for minutes')
    }
};

function convertMinToHours(min) {
    console.log(Math.round(min))
};

convertMinToHours(getTimeFromMinutes(90));


// Место для второй задачи
function findMaxNumber() {

}