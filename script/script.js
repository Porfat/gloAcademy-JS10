'use strict';

let calcButton = document.getElementById('start'),
    resetButton = document.getElementById('cancel'),

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
    incomeItems = document.querySelectorAll('.income-items');



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

        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();

        this.getAddExpenses();
        this.getAddIncome();
        this.getIncomeMonth();

        this.getBudget();

        this.showResult();

        // this.getTargetMonth();
        // this.getInfoDeposit();

        // this.titleCase();
    },

    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();

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
                this.expenses[itemExpenses] = cashExpenses;
            }

        }.bind(appData));

    },

    getIncome: function(){

        incomeItems.forEach(function(item){
            
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = cashIncome;
            }
            
        }.bind(appData));

    },


    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){

            item = item.trim();

            if(item !== ''){
                this.addExpenses.push(item);
            }


        }.bind(appData))
    },

    getAddIncome: function(){
        
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        }.bind(appData));

    },

    getExpensesMonth: function(){

        for (let x in this.expenses){
            
            this.expensesMonth += +this.expenses[x];
    
        }

    },

    getIncomeMonth: function(){

        for (let x in this.income){
            
            this.incomeMonth += +this.income[x];
    
        }

    },

    getBudget: function(){

            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = Math.ceil(this.expensesMonth / 30);

    },


    getTargetMonth: function(){
        return targetAmount.value / this.budgetMonth;
    },


    getStatusIncome: function(){
        switch (true) {
            case (this.budgetDay >= 800):
                console.log('Высокий уровень дохода');
                break;
    
            case (this.budgetDay < 800 && this.budgetDay > 300 ):
                console.log('Средний уровень дохода');
                break;
    
            case (this.budgetDay <= 300 && this.budgetDay >= 0):
                console.log('Низкий уровень дохода');
                break;
    
            default:
                console.log('Что то пошло не так');
                break;
        }
    },

    getInfoDeposit: function(){
        if(this.deposit){

            do {
                this.percentDeposit = prompt('Какой годовой процент?', '10');
            }

            while(isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);


            do {
                this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }

            while(isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);

        }
    },

    calcPeriod: function(){
        return this.budgetMonth * periodSelect.value;
    },

    titleCase: function(){

        let a = this.addExpenses.toLowerCase().split(' ');
        
        for (let i = 0; i < a.length; i++){
    
            a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);     
    
        }
    
        return a.join(' ');
     },


     doCalc: function(){
         
        if(salaryAmount.value === ''){
        
            appData.start.disabled = true;
        
        } else {
            appData.start();
            calcButton.style.display = 'none';
            resetButton.style.display = 'block';
        
            document.querySelectorAll('input[type="text"]').forEach(element => {
                element.disabled = true;
            });
        }

     },

     reset: function(){
        resetButton.style.display = 'none';
        calcButton.style.display = 'block';
    
        document.querySelectorAll('input[type="text"]').forEach(element => {
            
            element.disabled = false;
            element.value = '';
            periodSelect.value = '1';
            periodAmount.innerHTML = '1';
            appData.budgetMonth = '0';

        });

     },

};

calcButton.addEventListener('click', appData.doCalc);
resetButton.addEventListener('click', appData.reset);



expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


// Число под полоской (range) должно меняться в зависимости от позиции range
periodSelect.addEventListener("input", function (){
    periodAmount.innerHTML = periodSelect.value;
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



