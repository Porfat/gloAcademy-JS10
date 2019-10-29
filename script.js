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
                
                
            }

            appData.expenses.cost1 = verif;
            appData.expenses.cost2 = verif;

            
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
        return appData.mission / appData.getBudget();
    },


    getStatusIncome: function(){
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
        }
    },

};


let mandatoryExp1,
    mandatoryExp2;

appData.asking();

appData.getExpensesMonth();

appData.getBudget();


console.log(appData.expensesMonth);


console.log(`expensesMonth - Сумма всех расходов за месяц: ${appData.expensesMonth}`);


console.log(`getBudget() - Накопления за месяц: ${appData.budgetMonth}`);



appData.getTargetMonth() <0 ? console.log(`getTargetMonth() - Цель не будет достигнута`) : console.log(`getTargetMonth() - Цель будет достигнута за: ${Math.floor(appData.expensesMonth)} месяцев`);


let budgetDay = appData.getBudget() / 30;
console.log(`Бюджет на день: ${Math.floor(appData.budgetDay)}`);




console.log(`Наша программа включает в себя данные:`);

for (let key in appData){
    console.log('Свойство: ' + key);
}


Вызвать все необходимые методы, чтобы корректно считались все данные. В консоль вывести: 

— Расходы за месяц
— За какой период будет достигнута цель (в месяцах)
— Уровень дохода