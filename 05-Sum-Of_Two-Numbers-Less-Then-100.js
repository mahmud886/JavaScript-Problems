/*
Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true

*/

const lessThan100 = (number1, number2) => {
    let sum = number1 + number2;

    if (sum < 100) {
        return ` ${true} Sum = ${number1} + ${number2} = ${sum}`;
    } else {
        return ` ${false} Sum = ${number1} + ${number2} = ${sum}`;
    }
};

console.log(lessThan100(3, 77));
console.log(lessThan100(83, 34));
