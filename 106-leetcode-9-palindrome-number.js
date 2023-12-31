/* 
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

// =============================== && Solution && ==================================

const isPalindrome = function(x) {
    const reverseNum = parseInt(x.toString().split('').reverse().join(''))
    return x === reverseNum;
};

const case1 = isPalindrome(121)
const case2 = isPalindrome(1221)
const case3 = isPalindrome(-1221)
const case4 = isPalindrome(10)

console.log(`${case1} ${case2} ${case3} ${case4}`);

// =============================== && Solution && ==================================

/* 


*/