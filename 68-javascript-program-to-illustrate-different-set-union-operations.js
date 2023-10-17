/* 
    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Set and WeakSet
        JavaScript for... of Loop
        JavaScript Function and Function Expressions

        Set {"apple", "mango", "orange", "grapes", "banana"}

        The set union operation combines elements of both sets into one.

        A new set unionSet is created using new Set(). The unionSet variable contains all the values of setA. Then, the for...of loop is used to iterate through all the elements of setB and add them to unionSet using the add() method.

        The set does not contain duplicate values. Hence, if the set contains the same value, the latter value is discarded.

*/

// =============================== && Solution && ==================================

// perform union operation
// contain elements of both sets
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet;
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = union(setA, setB);

console.log(result);

// =============================== && Solution && ==================================

/* 
Set { 'apple', 'mango', 'orange', 'grapes', 'banana' }

*/
