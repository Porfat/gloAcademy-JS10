'use strict';

let sentence = 'Hi! My name is Philipp';

function test (a) {
    
    if (typeof a !== 'string'){
    
        console.log(`Entered value "${a}" isn't a string`);
    
    } else if (a.length > 30){
            
        console.log(`String w/o spaces: "${a.replace(/\s/g, '').substring(0,30)}..."`);
        
    } else {
        
        console.log(`String w/o spaces: "${a.replace(/\s/g, '')}"`);

    }

};


test(sentence);

