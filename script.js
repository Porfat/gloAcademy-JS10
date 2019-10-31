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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 100000,
    period: 5,
    asking: function(){


        if(confirm('Есть ли у вас доп. заработок?')){

            let itemIncome;

            do{
                itemIncome = prompt('Какой у вас доп. зарабаток?', 'Таксую');
            }

            while(!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);

            let cashIncome;

            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }

            while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

            appData.income[itemIncome] = cashIncome;
        }

        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Синты, софт, велик');

        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        

        for (let i = 0; i < 2; i++){
            
            let itemExpenses;

            do{
           
            itemExpenses = prompt(`${i+1}. Какие обязательные ежемесячные расходы у вас есть?`, `Расход #${i+1}`);

            }

            while(!isNaN(itemExpenses) || itemExpenses === '' || itemExpenses === null);


            let cashExpenses;

            do{
                cashExpenses = prompt('Во сколько это обойдется?', 7000);
            }

            while(isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
    
            appData.expenses[itemExpenses] = cashExpenses;
            
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

    getInfoDeposit: function(){
        if(appData.deposit){

            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }

            while(isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);


            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }

            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);

        }
    },

    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    },

    titleCase: function(){

        let a = appData.addExpenses.toLowerCase().split(' ');
        
        for (let i = 0; i < a.length; i++){
    
            a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);     
    
        }
    
        return a.join(' ');
     }

};


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getInfoDeposit();


appData.titleCase();



console.log(`appData.expensesMonth - Сумма всех расходов за месяц: ${appData.expensesMonth}`);

console.log(`appData.budgetMonth - Накопления за месяц: ${appData.budgetMonth}`);

appData.getTargetMonth() <0 ? console.log(`getTargetMonth() - Цель не будет достигнута`) : console.log(`appData.getTargetMonth() - Цель будет достигнута за: ${Math.floor(appData.getTargetMonth())} месяцев`);

console.log(`Бюджет на день: ${Math.floor(appData.budgetDay)}`);


appData.getStatusIncome();


console.log(appData.titleCase());


// console.log(`Наша программа включает в себя данные:`);

// for (let key in appData){
//     console.log(`${key}: ${appData[key]}`);
// }
