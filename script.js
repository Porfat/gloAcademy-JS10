'use strict';

let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Синты, софт, велик'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 5;

do{
    money = prompt('Ваш месячный доход?', 30000);
}

while(isNaN(money) || money === '' || money === null);

let showTypeOf = function(data){
    console.log(`Тип данных переменной:`, typeof(data));
};

showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);

console.log(addExpenses.split(','));

let mandatoryExp1,
    mandatoryExp2; 


    let getExpensesMonth = function(){

        let sum = 0;
    
        for (let i = 0; i < 2; i++){
    
            if (i === 0){
                mandatoryExp1 = prompt('1. Какие обязательные ежемесячные расходы у вас есть?', 'Квартира');
            }
    
            if (i === 1){
                mandatoryExp2 = prompt('2. Какие обязательные ежемесячные расходы у вас есть?', 'Телефон');
            }
    
            let verif = prompt('Во сколько это обойдется?', 7000);

            while(isNaN(verif) || verif === '' || verif === null){
    
                verif = prompt('Во сколько это обойдется?', 7000);
    
            };
            
            sum = sum + +verif;
        };
    
        return sum;
    
    };


let expensesAmount = getExpensesMonth();
console.log(`f() Сумма всех расходов за месяц: ${expensesAmount}`);

function getAccumulatedMonth(){
    return money - expensesAmount; 
};
console.log(`f() Накопления за месяц: ${getAccumulatedMonth()}`);


function getTargetMonth(){
    return mission / getAccumulatedMonth();
};

// 3) Если getTargetMonth возвращает нам отрицательное значение,
// то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута

getTargetMonth() <0 ? console.log(`f() Цель не будет достигнута`) : console.log(`f() Цель будет достигнута за: ${Math.floor(getTargetMonth())} месяцев`);


let budgetDay = getAccumulatedMonth() / 30;
console.log(`Бюджет на день: ${Math.floor(budgetDay)}`);

let getStatusIncome = function() {
    switch (true) {
        case (budgetDay >= 800):
            console.log('Высокий уровень дохода');
            break;

        case (300 < budgetDay < 800):
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
