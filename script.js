'use strict';

let money,
    
start = function(){

    do{
        money = prompt('Ваш месячный доход?', 30000);
    }

    while(isNaN(money) || money === '' || money === null);

};

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 5,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Синты, софт, велик');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        let mandatoryExp,
        expCost;

        for (let i = 0; i < 2; i++){
    
            mandatoryExp = prompt(`${i+1}. Какие обязательные ежемесячные расходы у вас есть?`, `Расход #${i+1}`);

            do{
                expCost = prompt('Во сколько это обойдется?', 7000);
            }

            while(isNaN(expCost) || expCost === '' || expCost === null);
    
            appData.expenses[mandatoryExp] = +expCost;
            
        }

    },

    getExpensesMonth: function(){

        for (let x in appData.expenses){
            
            appData.expensesMonth += +appData.expenses[x];
    
        }

    },
    

    getBudget: function(){

            appData.budgetDay = appData.expensesMonth / 30;
            appData.budgetMonth = appData.budget - appData.expensesMonth;

    },


    getTargetMonth: function(){
        return appData.mission / appData.budgetMonth;
    },


    getStatusIncome: function(){
        switch (true) {
            case (appData.budgetDay >= 800):
                console.log('Высокий уровень дохода');
                break;
    
            case (appData.budgetDay < 800 && appData.budgetDay > 300 ):
                console.log('Средний уровень дохода');
                break;
    
            case (appData.budgetDay <= 300 && appData.budgetDay >= 0):
                console.log('Низкий уровень дохода');
                break;
    
            default:
                console.log('Что то пошло не так');
                break;
        }
    },

};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();


// console.log(appData.expenses);
// console.log(appData.expensesMonth);


console.log(`expensesMonth - Сумма всех расходов за месяц: ${appData.expensesMonth}`);

console.log(`getBudget() - Накопления за месяц: ${appData.budgetMonth}`);

appData.getTargetMonth() <0 ? console.log(`getTargetMonth() - Цель не будет достигнута`) : console.log(`getTargetMonth() - Цель будет достигнута за: ${Math.floor(appData.getTargetMonth())} месяцев`);

console.log(`Бюджет на день: ${Math.floor(appData.budgetDay)}`);


appData.getStatusIncome();



console.log(`Наша программа включает в себя данные:`);

for (let key in appData){
    console.log('Свойство: ' + key);
}