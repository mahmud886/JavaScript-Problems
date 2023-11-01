

/* 
JavaScript Program to Convert the First Letter of a String into UpperCase
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String toUpperCase()
JavaScript Function and Function Expressions

*/

// =============================== && Solution && ==================================

const prompt = require('prompt-sync')();

function capitalizeFirstLetter (str){
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

const string = prompt('Enter a sring: ');
const result = capitalizeFirstLetter(string);
console.log(capitalized);
// =============================== && Solution && ==================================

/* 
Output

Enter a string: javaScript
JavaScript
In the above program, the user is prompted to enter a string and that string is passed into the capitalizeFirstLetter() function.

The string's first character is extracted using charAt() method. Here, str.charAt(0); gives j.
The toUpperCase() method converts the string to uppercase. Here, str.charAt(0).toUpperCase(); gives J.
The slice() method returns the rest of the string.
Here, str.slice(1); gives avaScript.
These two values are concatenated using the + operator.

*/