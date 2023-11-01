/* 
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Date and Time
JavaScript if...else Statement
A year is a leap year if the following conditions are satisfied:

The year is a multiple of 400.
The year is a multiple of 4 and not a multiple of 100.
(0 == year % 4) && (0 != year % 100) || (0 == year % 400)
*/

// =============================== && Solution && ==================================
const prompt = require('prompt-sync')();

function checkleapYear(year) {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(`${year} is leap year.!`)
    }else{
        console.log(`${year} is not leap year.!`)
    }
}

const year = prompt('Enter year: ')
const result = checkleapYear(year);



// =============================== && Solution && ==================================

/* 
Output

Enter a year: 2000
2000 is a leap year
In the above program, the three conditions are checked to determine if the year is a leap year or not.

The % operator returns the remainder of the division.

*/