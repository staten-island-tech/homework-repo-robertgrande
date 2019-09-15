const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break; // you need to break all of the cases
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'sun';
        break;
    case 2:
        day = 'mon';
        break;
    case 3:
        day = 'tues';
        break;
    case 4:
        day = 'wed';
        break;
    case 5:
        day = 'thurs';
        break;
    case 6:
        day = 'fri';
        break;
    case 7:
        day = 'sat';
        break;
}

console.log(`Today is ${day}`);