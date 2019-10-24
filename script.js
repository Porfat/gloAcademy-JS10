'use strict';

let money = +prompt('Ваш месячный доход?', 30000),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Синты, софт, велик'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 5;

console.log(addExpenses.split(','));

let showTypeOf = function(data){
    console.log(`Тип данных переменной:`, typeof(data));
};

showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);

let mandatoryExp1 = prompt('1. Какие обязательные ежемесячные расходы у вас есть?', 'Квартира'),
cost1 = +prompt('1. Во сколько это обойдется?', 7000),
mandatoryExp2 = prompt('2. Какие обязательные ежемесячные расходы у вас есть?', 'Телефон'),
cost2 = +prompt('2. Во сколько это обойдется?', 500);


function getExpensesMonth(a, b){
    let c = a + b;
    return c;
};

function getAccumulatedMonth(a, b){
    let c = a - b;
    return c;
};

function getTargetMonth(a, b){
    let c = a / b;
    return c;
};

let ExpensesMonth = getExpensesMonth(cost1, cost2),
    AccumulatedMonth = getAccumulatedMonth(money, ExpensesMonth),
    TargetMonth = getTargetMonth(mission, AccumulatedMonth);


console.log(`f() Сумма всех расходов за месяц: ${ExpensesMonth}`);
console.log(`f() Накопления за месяц: ${AccumulatedMonth}`);
console.log(`f() Цель будет достигнута за: ${Math.floor(TargetMonth)} месяцев`);


let budgetDay = AccumulatedMonth / 30;
console.log(`Бюджет на день: ${Math.floor(budgetDay)}`);

let getStatusIncome = function() {
    switch (true) {
        case (budgetDay >= 800):
            console.log('Высокий уровень дохода');
            break;

        case (300 < budgetDay <= 800):
            console.log('Средний уровень дохода');
            break;

        case (0 < budgetDay <= 300):
            console.log('Низкий уровень дохода');
            break;

        default:
            console.log('Что то пошло не так');
            break;
    }
};

getStatusIncome();
