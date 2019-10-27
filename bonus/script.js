'use strict';

let arr = ['72', '29', '420', '460', '180', '90', '20'];

let findTwoFour = function(){

    for (let i = 0; i < 7; i++){

        if (arr[i].charAt(0) === '4' || arr[i].charAt(0) === '2') {

            console.log(`arr[${i}]: ${arr[i]}`);
        
        };

    };

};

findTwoFour();

let findPrimeNumber = function(){

    for (let i = 2; i < 100; i++){

        let prime = true;

        for (let j = 2; j * j <= i; j++){

            if (i % j == 0) {

                prime = false;
                
                break;    
            }
            
        }

        if (prime == true){

            console.log(`Простое число: ${i} | Делители этого числа: 1 и ${i}`);

        } 
    
    }

};

findPrimeNumber();