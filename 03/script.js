'use strict';

let v1 = +prompt ('Скорость первого поезда?'),
v2 = +prompt ('Скорость второго поезда?'),
s = +prompt ('Расстояние между ними перед выездом?');


let functionTrain = function(v1, v2, s){

    let t;

    t = s / (v1 + v2);

    console.log(`Поезда встретяться на отрезке через ${t*60} мин.`);

};

functionTrain(v1,v2,s);

