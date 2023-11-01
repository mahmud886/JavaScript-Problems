// const prompt = require('prompt-sync')();

/* 
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Math random()

*/

// =============================== && Solution && ==================================
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result;
}

console.log(generateString(5));
// =============================== && Solution && ==================================

/* 
Output

VEWaq
In the above example, the Math.random() method is used to generate random characters from the specified characters (A-Z, a-z, 0-9).

The for loop is used to loop through the number passed into the generateString() function. During each iteration, a random character is generated.

*/