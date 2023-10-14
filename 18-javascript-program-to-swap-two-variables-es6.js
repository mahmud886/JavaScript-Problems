/**
 *

    Here, a new es6 feature, called destructuring assignment [a, b] = [b, a], is used to swap the value of two variables. If [a, b] = [1, 2, 3], the value of a will be 1 and value of b will be 2.

    First a temporary array [b, a] is created. Here the value of [b, a] will be [2, 4].
    The destructuring of the array is done, i.e [a, b] = [2, 4].

    As a result, the value of the variables are swapped.

 */

const prompt = require('prompt-sync')();

// take input from the user;

let variable1 = prompt('Enter variable 1: ');
let variable2 = prompt('Enter variable 2: ');

console.log(`The value of before swapping: ${variable1} & ${variable2}`);

[variable1, variable2] = [variable2, variable1];

console.log(`The value of after swapping: ${variable1} & ${variable2}`);

/*
    Enter variable 1: 4
    Enter variable 2: 3
    The value of before swapping: 4 & 3
    The value of after swapping: 3 & 4
*/
