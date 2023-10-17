/* 

    JavaScript Program To Perform Intersection Between Two Arrays

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        👉🏻 Javascript Array filter()
        👉🏻 JavaScript Array push()
        👉🏻 JavaScript Set and WeakSet

    In the above program, an intersection is performed between array1 and array2.

       👉🏻 The array elements are converted into Set elements using the new Set() constructor.
       👉🏻 The for...of loop is used to iterate over the second Set elements.
       👉🏻 The has() method is used to check if the element is in the first Set.
       👉🏻 If the element is present in the first Set, that element is added to the intersectionResult array using the push() method.


*/

// =============================== && Solution && ==================================
const performIntersection = (arr1, arr2) => {
    // converting into set
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionResult.push(i);
        }
    }
    return intersectionResult;
};

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);
// =============================== && Solution && ==================================

/* 

OUTPUT => [ 1, 3, 5 ]

*/
