/* 
        To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Set and WeakSet
        JavaScript for... of Loop
        JavaScript Function and Function Expressions

        The set difference operation represents elements that are present in one set and not in another set.

        The differenceSet contains all the elements of setA. Then, the for...of loop is used to iterate through all the elements of setB. If the element that is present in setB is also available in setA, that element is deleted using delete() method.

*/

// =============================== && Solution && ==================================

// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
    let differenceSet = new Set(setA);
    for (let i of setB) {
        differenceSet.delete(i);
    }
    return differenceSet;
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = difference(setA, setB);

console.log(result);

// =============================== && Solution && ==================================

/* 
Set {"mango", "orange"}

*/
