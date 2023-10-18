/* 
JavaScript Program to Check Whether a String is Palindrome or Not

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    → JavaScript String
    → JavaScript Function and Function Expressions

→ A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.

*/

// =============================== && Solution && ==================================
const prompt = require('prompt-sync')();

const checkPalindrome = (str) => {
    let strLength = str.length;

    for(let i = 0; i < strLength / 2; i++) {
        if(str[i] != str[strLength - 1 - i]){
            return `This string is not palindrome.`
        }else{
            return `This string is palindrome.`
        }
    }
}

const str = prompt('Enter a string: ')
const result = checkPalindrome(str);
console.log(result);

console.log('Hello'.length)


// =============================== && Solution && ==================================

/* 
Output

Enter a string: madam
It is a palindrome

In the above program, the checkPalindrome() function takes input from the user.

   → The length of the string is calculated using the length property.
   → The for loop is used to iterate up to the half of the string. The if condition is used to check if the first and the   corresponding last characters are the same. This loop continues till the half of the string.
   → During the iteration, if any character of the string, when compared with its corresponding last string is not equal, the string is not considered a palindrome.


*/