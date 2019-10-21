// Создать переменную num со значением 266219:

let num = 266219;

// Вывести в консоль произведение (умножение) цифр этого числа:

let digits = num.toPrecision().split('');

console.log(digits);

function multiply (digits) {
    var prod = 1;
    for (var i = 0; i < digits.length; i++) {
        prod *= digits[i];
    }
    return prod;
}

product = multiply(digits);

console.log(product);

// Полученный результат возвести в степень 3, используя только 1 оператор:

console.log(product**3);

// Вывести на экран первые 2 цифры полученного числа:

console.log(product.toPrecision().substring(0,2));

