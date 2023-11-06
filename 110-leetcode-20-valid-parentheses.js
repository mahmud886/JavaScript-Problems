/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// =============================== && Solution && ==================================
const isValid = function(s) {
    let fullBrackets = [];

    for(let brackets = 0; brackets < s.length; brackets++) {
        if(s[brackets] == '('){
            fullBrackets.push(')');
        }else if(s[brackets] == '['){
            fullBrackets.push(']');
        }else if(s[brackets] == '{'){
            fullBrackets.push('}');
        }else if(fullBrackets.pop() !== s[brackets]){
            return false;
        }
    }
    return !fullBrackets.length;
};
// =============================== && Solution && ==================================

/* 
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/