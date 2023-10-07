/*
Return the Remainder from Two Numbers
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0

*/

const remainder = (num1, num2) => num1 % num2;

console.log(remainder(1, 3)); // ➞ 1
console.log(remainder(3, 4)); // ➞ 3
console.log(remainder(-9, 45)); // ➞ -9
console.log(remainder(5, 5)); //   ➞ 0
