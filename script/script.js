'use strict';

let calcButton = document.getElementById('start'),
    cancelButton = document.getElementById('cancel'),

    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    
    depositCheck = document.querySelector('#deposit-checkmark'),

    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],

    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.aditional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    textInput = document.querySelectorAll('input[type="text"]');



let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,

    start: function(){

        // if(salaryAmount.value === ''){

        //     calcButton.disabled = true;
        //     // alert('Ошибка, поле месячный доход должно быть заполнено!')
        //     // return;
        // }

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();

        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncomeMonth();

        appData.getBudget();

        appData.showResult();

        // appData.getTargetMonth();
        // appData.getInfoDeposit();

        // appData.titleCase();
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();

        periodSelect.addEventListener('input', function (){
            incomePeriodValue.value = appData.calcPeriod();
        });



    },

    addExpensesBlock: function(){

        let cloneExpensesItem = expensesItems[0].cloneNode(true);

        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },

    addIncomeBlock: function(){

        let cloneIncomeItem = incomeItems[0].cloneNode(true);

        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }

    },

    getExpenses: function(){

        expensesItems.forEach(function(item){
            
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }

        });

    },

    getIncome: function(){

        incomeItems.forEach(function(item){
            
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
            
        });

    },


    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){

            item = item.trim();

            if(item !== ''){
                appData.addExpenses.push(item);
            }


        })
    },

    getAddIncome: function(){
        
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });

    },

    getExpensesMonth: function(){

        for (let x in appData.expenses){
            
            appData.expensesMonth += +appData.expenses[x];
    
        }

    },

    getIncomeMonth: function(){

        for (let x in appData.income){
            
            appData.incomeMonth += +appData.income[x];
    
        }

    },

    getBudget: function(){

            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.ceil(appData.expensesMonth / 30);

    },


    getTargetMonth: function(){
        return targetAmount.value / appData.budgetMonth;
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

    calcPeriod: function(){
        return appData.budgetMonth * periodSelect.value;
    },

    titleCase: function(){

        let a = appData.addExpenses.toLowerCase().split(' ');
        
        for (let i = 0; i < a.length; i++){
    
            a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);     
    
        }
    
        return a.join(' ');
     },

     disableFields: function(){
        
        calcButton.style.display = 'none';
        cancelButton.style.display = 'block';
    
        textInput.forEach(element => {
            element.disabled = true;
        });

     }

};

calcButton.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


// Число под полоской (range) должно меняться в зависимости от позиции range
periodSelect.addEventListener("input", function rangeValue(){
    periodAmount.innerHTML = periodSelect.value;
});

calcButton.addEventListener('click', function (){
                

    if(salaryAmount.value === ''){
        
        appData.start.disabled = true;
    
    } else {

        appData.disableFields();
    
    }
   
});






// if(salaryAmount.value === ''){

//     alert('Ошибка, поле месячный доход должно быть заполнено!')
//     return;
// };

console.log(`appData.budgetMonth - Накопления за месяц: ${appData.budgetMonth}`);

appData.getTargetMonth() <0 ? console.log(`getTargetMonth() - Цель не будет достигнута`) : console.log(`appData.getTargetMonth() - Цель будет достигнута за: ${Math.floor(appData.getTargetMonth())} месяцев`);

console.log(`Бюджет на день: ${Math.floor(appData.budgetDay)}`);


// appData.getStatusIncome();

// console.log(appData.titleCase());





// console.log(`Наша программа включает в себя данные:`);

// for (let key in appData){
//     console.log(`${key}: ${appData[key]}`);
// }



