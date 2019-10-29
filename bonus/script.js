'use strict';

let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


week.forEach(element => {

    document.write(element);
    document.write('<br/>');


    if (element === 'Saturday' || element === 'Sunday'){

        document.write(element.bold());

    }

    
});

// for (let element in week){

//     document.write(week[element]);
//     document.write('<br/>');

//     if (week[element] === 'Saturday' || week[element] === 'Sunday'){
        
//         week[element].bold();

//     }


// }





