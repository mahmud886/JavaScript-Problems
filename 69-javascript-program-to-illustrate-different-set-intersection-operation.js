/* 
        To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Set and WeakSet
        JavaScript for... of Loop
        JavaScript Function and Function Expressions

        Set {"apple"}

        The set intersection operation represents elements that are present in both setA and setB.

        A new set intersectionSet is created using new Set(). Then, the for...of loop is used to iterate through the setB. For every element that is present in both setA and setB, they are added to the intersection set.

*/

// =============================== && Solution && ==================================

// perform intersection operation
// elements of set a that are also in set b
function intersection(setA, setB) {
    let intersectionSet = new Set();

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = intersection(setA, setB);

console.log(result);

// =============================== && Solution && ==================================

/* 
Set {"apple"}

*/
