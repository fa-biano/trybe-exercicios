let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let holidays = [24, 25, 31];
let fridays = [4, 11, 18, 25];
let ulOfDays = document.getElementById('days');

function createCalendarDays() {
    for (let day of decemberDaysList) {
        ulOfDays.innerHTML += '<li>' + day;
    }
}

createCalendarDays();

function setClassName(paramDays, addClass) {
    let classDay = ulOfDays.children

    for (let index = 0; index < classDay.length; index += 1) {
        for (let index2 = 0; index2 < paramDays.length; index2 += 1) {
            if (parseInt(classDay[index].innerText) === paramDays[index2]) {
                classDay[index].classList.add(addClass);
            }
        }
    }
}

setClassName(decemberDaysList, 'day');
setClassName(holidays, 'holiday');
setClassName(fridays, 'friday');