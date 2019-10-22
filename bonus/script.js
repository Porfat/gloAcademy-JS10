// Создать переменную num со значением 266219:

let num = 266219;

// Вывести в консоль произведение (умножение) цифр этого числа:

product = num.toString().split('').reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log(`Произведение числа из num: ${product}`);

// Полученный результат возвести в степень 3, используя только 1 оператор:

productThirdPower = product**3

console.log(`${product} ^ 3 = ${productThirdPower}`);

// Вывести на экран первые 2 цифры полученного числа:

console.log(`Первые две цифры из полученного числа: ${(productThirdPower).toString().substring(0,2)}`);