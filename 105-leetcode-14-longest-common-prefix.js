/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

// =============================== && Solution && ==================================

/*
// Imperative Programing 

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return 'Null';

    let shortest = strs[0];
    for(let i = 1; i < strs.length; i++) {
        if(strs[i].length < shortest.length){
            shortest = strs[i]
        }
    }

    for(let i = 0; i < shortest.length; i++) {
        const char = shortest[i]
        for(let j = 0; j < strs.length; j++) {
            if(strs[j][i] !== char) {
                return shortest.substring(0, i)
            }
        }
    }

    return shortest;
};
*/

// Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

// Declarative Way

const longestCommonPrefix = (strs) => {
    if(strs.length === 0) return '';

    const shortest = strs.reduce((min, arr)=> (arr.length < min.length ? arr : min), strs[0])

    return [...shortest].map((value, index)=> {
        if(strs.every((str)=> str[index] === value))
        return value
    }).join('')
}

const result = longestCommonPrefix(["flower","flow","flight"]);
console.log(result)

// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// =============================== && Solution && ==================================

/* 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/