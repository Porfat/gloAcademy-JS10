'use strict';

// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money:
let money = prompt('Ваш месячный доход?', 30000),

// Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses, вывести в консоль в виде массива:
    addExpenses = +prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Синты, софт, велик'),

// Спросить у пользователя “Есть ли у вас депозит в банке?”
// сохранить данные в переменной deposit (булевое значение true/false):
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 5;

    console.log(addExpenses.split(','));

// Вывести в консоль типы данных money, income, deposit:

console.log(typeof(money));
console.log(typeof(addExpenses));
console.log(typeof(deposit));

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в переменные:

let mandatoryExp1 = prompt('1. Какие обязательные ежемесячные расходы у вас есть?', 'Квартира'),
mandatoryExp1Cost = +prompt('1. Во сколько это обойдется?', 7000),
mandatoryExp2 = prompt('2. Какие обязательные ежемесячные расходы у вас есть?', 'Телефон'),
mandatoryExp2Cost = +prompt('2. Во сколько это обойдется?', 500),

// Вычислить доход за месяц, учитывая обязательные расходы, сохранить в переменную budgetMonth и вывести результат в консоль:

budgetMonth = money-mandatoryExp1Cost-mandatoryExp2Cost;

// Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону:

console.log(`Цель будет достигнута за: ${Math.ceil(mission/budgetMonth)} месяцев`);

// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону:

let budgetDay = budgetMonth / 30;
console.log(`Бюджет на день: ${Math.floor(budgetDay)}`);


switch (true) {
    case (budgetDay <= 800):
        console.log('Высокий уровень дохода');
        break;

    case (300 > budgetDay < 800):
        console.log('Средний уровень дохода');
        break;

    case (0 > budgetDay < 300):
        console.log('Низкий уровень дохода');
        break;

    default:
        console.log('Что то пошло не так');
        break;
}


