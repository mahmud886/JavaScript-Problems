/*
Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

Examples
printArray(1) ➞ [1]

printArray(3) ➞ [1, 2, 3]

printArray(6) ➞ [1, 2, 3, 4, 5, 6]
*/

// function printArray(num) {
//     if (num <= 0) {
//         return [];
//     } else {
//         return Array.from({ length: num }, (_, index) => index + 1);
//     }
// }

const printArray = (n) => {
    return Array(...Array(n)).map((arr, i) => i + 1);
};

console.log(printArray(0));
console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));
