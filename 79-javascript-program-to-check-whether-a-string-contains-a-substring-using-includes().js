// const prompt = require('prompt-sync')();

/* 
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String includes()
JavaScript String indexOf()

*/

// =============================== && Solution && ==================================
const prompt = require('prompt-sync')();

const str = prompt('Enter a string: ');
const checkString = prompt('Enter a string that you want to check: ')

if(str.includes(checkString)){
    console.log(`The string contains ${checkString}`);
}else{
    console.log(`The string does not contain ${checkString}`)
}


// =============================== && Solution && ==================================

/* 
Output

Enter a string: JavaScript is fun
Enter a string that you want to check: fun
The string contains fun
The includes() method is used with the if...else statement to check whether a string contains the characters of a specified string.

Note: The includes() method is case-sensitive. Hence, fun and Fun are different.

*/
