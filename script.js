// Присвоить значения переменным

let money = 23704;
let income = 'Code banners for H1';
let addExpenses = 'Pussy, Pivo, Weed';
let deposit = false;
let mission = 50000;
let period = 2;

// Вывести в консоль тип данных значений переменных money, income, deposit;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

// Вывести в консоль длину строки income

console.log(income.length);

// Вывести в консоль “Период (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”

console.log(`Период ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);

// Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль

console.log(addExpenses.toLowerCase().split(', '));

// Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30), вывести в консоль результат и остаток от деления

let budgetDay = money / 30;
console.log('Результат: ' + budgetDay);
console.log('Остаток от деления: ' + money%30);