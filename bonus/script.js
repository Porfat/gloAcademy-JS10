'use strict';

let today = new Date(),
    date = ('0' + (today.getDate() + 1)).slice(-2)+'.'+('0' + (today.getMonth() + 1)).slice(-2) + '.' + today.getFullYear(),
    
    time = ('0' + (today.getHours() +1)).slice(-2)+":"+('0' + (today.getMinutes() +1)).slice(-2) + ":" + ('0' + (today.getSeconds() + 1)).slice(-2),
    
    dateTime = document.write(time+' '+date);