function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let holidays = [24, 25, 31];
let fridays = [4, 11, 18, 25];
let ulOfDays = document.getElementById('days');

// Exercício 1:
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

// Exercício 2:
let buttonsContainer = document.querySelector('.buttons-container');
let buttonTag = document.createElement('button');

function createButton(parent, child, addId, addName) {
    parent.appendChild(child);
    parent.children[0].id = addId;
    parent.children[0].innerText = addName;
}

createButton(buttonsContainer, buttonTag, 'btn-holiday', 'Feriados');

// Exercício 3:
function holidayHighlight() {
    let holidays = document.querySelectorAll('.holiday');
    for (let holiday of holidays) {
        
        if (holiday.style.backgroundColor === 'white'){
            holiday.style.backgroundColor = 'rgb(238,238,238)'
        } else {
            holiday.style.backgroundColor = 'white';
        }
    }
}

buttonsContainer.firstElementChild.addEventListener('click', holidayHighlight)

// Exercício 4:
let buttonTag2 = document.createElement('button');
function createButton2(parent, child, addId, addName) {
    parent.appendChild(child);
    parent.children[1].id = addId;
    parent.children[1].innerText = addName;
}
createButton2(buttonsContainer, buttonTag2, 'btn-friday', 'Sexta-feira');

// Exercício 5:
function setSextou() {
    let fridaysClass = document.querySelectorAll('.friday')
    for (let index = 0; index < fridaysClass.length; index += 1) {
        if (fridaysClass[index].innerText !=='Sextou') {
            fridaysClass[index].innerText = 'Sextou';
        } else {
            fridaysClass[index].innerText = fridays[index];
        }
    }
}
buttonsContainer.children[1].addEventListener('click', setSextou)

// Exercício 6:
let dayToZoom = document.querySelectorAll('.day');

function setZoomDay() {
    for (let index = 0; index < dayToZoom.length; index += 1) {
        dayToZoom[index].addEventListener('mouseover', () => {
            dayToZoom[index].style.transform = 'scale(1.4)';
        })

        dayToZoom[index].addEventListener('mouseleave', () => {
            dayToZoom[index].style.transform = 'scale(1.0)';
        })
    }
}
setZoomDay();

// Exercício 7:
let taskContainer = document.querySelector('.my-tasks');

function addNewTask() {
    let span = document.createElement('span')
    span.innerText = 'Projeto';
    taskContainer.appendChild(span)
}

addNewTask();

// Exercício 8:
function subtitleColor() {
    let div = document.createElement('div');
    div.classList.add('task');
    div.style.backgroundColor = 'green';
    taskContainer.appendChild(div);
}

subtitleColor();

// Exercício 9:
let colorFlag = document.querySelector('.task');
let hasSelected = false;

function toggleClassSelected() {
    if (colorFlag.classList.contains('selected')) {
        colorFlag.classList.remove('selected')
        hasSelected = false;
    } else {
        colorFlag.classList.add('selected');
        hasSelected = true;
    }
    // console.log(hasSelected);
    return
}

colorFlag.addEventListener('click', toggleClassSelected);

// Exercício 10:
function printTaskColor(event) {
    if (hasSelected === true) {
        let color = window.getComputedStyle(colorFlag, null).getPropertyValue('background-color');
        for (let index = 0; index < ulOfDays.children.length; index += 1) {
            if (event.target === ulOfDays.children[index]) {
                if (ulOfDays.children[index].style.color !== color) {
                    ulOfDays.children[index].style.color = color;
                } else {
                    ulOfDays.children[index].style.color = 'rgb(119,119,119)'
                }
            }
        }
    }
}

ulOfDays.addEventListener('click', printTaskColor);

// Exercício Bonus:
let taskInput = document.getElementById('task-input');
let btnInput = document.getElementById('btn-add');
let appointment = document.querySelector('.task-list')

function addNewAppointment() {
    let li = document.createElement('li');
    li.innerText = taskInput.value;
    if (taskInput.value === '') {
        alert('Adicione algum compromisso.')
    } else {
        appointment.appendChild(li);
        taskInput.value = '';
    }
}

btnInput.addEventListener('click', addNewAppointment);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addNewAppointment();  
    }
});
