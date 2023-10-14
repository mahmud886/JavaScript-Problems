// You can also swap the variable's values using the arithmetic operators.

/**
 *
        This method only uses the two variables and swaps the value of the variables using arithmetic operators + and -.

        Here, parseInt() is used because prompt() takes input from the user as a string. And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.

        To learn more about the type conversion, go to JavaScript Type Conversions.

        Let's see how the above program swaps values. Initially, a is 4 and b is 2.

            a = a + b assigns the value 4 + 2 to a (now 6).
            b = a - b assigns the value 6 - 2 to b (now 4).
            a = a - b assign the value 6 - 4 to a (now 2).

        Finally, a is 2 and b is 4.

        Note: You can use arithmetic operators (+, -) if both variables are of number type.
 */

const prompt = require('prompt-sync')();

// take input from the user;

let variable1 = prompt('Enter variable 1: '); //  if = 5
let variable2 = prompt('Enter variable 2: '); // if = 6

console.log(`The value of before swapping: ${variable1} & ${variable2}`);

variable1 = variable1 + variable2; // 5 + 6 = 11
variable2 = variable1 - variable2; // 11 - 6 = 5
variable1 = variable1 - variable2; // 11 - 5 = 6

console.log(`The value of after swapping: ${variable1} & ${variable2} Z`);
