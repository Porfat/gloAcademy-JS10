'use strict';

let days = [
    ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
    ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье']
],

lang = prompt('Language? (en, ru)').toLowerCase();

// Решите задачу через if:

if (lang == 'en'){
    console.log(days[0]);
}

else {
    console.log(days[1]);
};

// Решите задачу через switch:

switch (lang) {

    case 'en':
        console.log(days[0]);
        break;

    case 'ru':
        console.log(days[1]);
        break;
};

// Решите задачу через многомерный массив без ифов и switch:

lang == 'en' ? console.log(days[0]) : console.log(days[1]);


// Решить задачу (имя) с помощью нескольких тернарных операторов, без использования if или switch:

let namePerson = prompt('Имя?').toLowerCase();

namePerson == 'артем' ? console.log('Это директор') :
namePerson == 'максим' ? console.log('Это преподователь'):
console.log('Это студент');

