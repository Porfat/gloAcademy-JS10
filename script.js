'use strict';

let money = +prompt('Ваш месячный доход?', 30000),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Синты, софт, велик'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 5;

console.log(addExpenses.split(','));


console.log(typeof(money));
console.log(typeof(addExpenses));
console.log(typeof(deposit));



let mandatoryExp1 = prompt('1. Какие обязательные ежемесячные расходы у вас есть?', 'Квартира'),
mandatoryExp1Cost = +prompt('1. Во сколько это обойдется?', 7000),
mandatoryExp2 = prompt('2. Какие обязательные ежемесячные расходы у вас есть?', 'Телефон'),
mandatoryExp2Cost = +prompt('2. Во сколько это обойдется?', 500),

budgetMonth = money-mandatoryExp1Cost-mandatoryExp2Cost;

function getExpensesMonth(){
    mandatoryExp1Cost + mandatoryExp2Cost
};


console.log(`Цель будет достигнута за: ${Math.ceil(mission/budgetMonth)} месяцев`);

let budgetDay = budgetMonth / 30;
console.log(`Бюджет на день: ${Math.floor(budgetDay)}`);


switch (true) {
    case (budgetDay >= 800):
        console.log('Высокий уровень дохода');
        break;

    case (budgetDay < 800 && budgetDay > 300 ):
        console.log('Средний уровень дохода');
        break;

    case (budgetDay <= 300 && budgetDay >= 0):
        console.log('Низкий уровень дохода');
        break;

    default:
        console.log('Что то пошло не так');
        break;
};