/* JavaScript Program to Convert Decimal to Binary

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript Function and Function Expressions
    JavaScript while and do...while Loop */

const prompt = require('prompt-sync')();

function convertToBinary(number) {
    let binary = 0;
    let remainder,
        i = 1,
        step = 1;

    while (number != 0) {
        remainder = number % 2;
        console.log(`Step ${step++}: ${number} / 2, Remainder = ${remainder}, quotient = ${parseInt(number / 2)}`);
        number = parseInt(number / 2);
        binary = binary + remainder * i;
        i = i * 10;
    }
    console.log(`Binary: ${binary}`);
}

const num = prompt('Enter a decimal number: ');
convertToBinary(num);

/*
    `Step 1: 9/2, Remainder = 1, Quotient = 4
    Step 2: 4/2, Remainder = 0, Quotient = 2
    Step 3: 2/2, Remainder = 0, Quotient = 1
    Step 4: 1/2, Remainder = 1, Quotient = 0
    Binary: 1001

    In the above program, the user is prompted to enter a decimal number. The number entered by the user is passed as an argument to the convertToBinary() function.

    The while loop is used until the number entered by the user becomes 0.

    The binary value is calculated by:

    bin = bin + rem * i;

    Here, rem is the modulus % value of the number when divided by 2 and i gives the place value of the binary number.`



*/
