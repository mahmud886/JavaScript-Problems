/* 

    JavaScript Program To Perform Intersection Between Two Arrays

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        👉🏻 Javascript Array filter()
        👉🏻 JavaScript Array push()
        👉🏻 JavaScript Set and WeakSet

    In the above program, an intersection is performed between two arrays using the filter() method. The filter method iterates over an array and returns the array elements that pass the given condition.

    👉🏻 Each element of the first array is compared with the second array using the indexOf() method.
    👉🏻 The arr2.indexOf(x) method searches arr2 and returns the position of the first occurrence of arr1. If the value cannot be found, it returns -1.
    👉🏻 All the elements that are in both arrays are returned by the filter() method.

        👉🏻 Note: You could also use the includes() method to check if the array elements are in both arrays.

        👉🏻 const intersectionResult = arr1.filter(x => arr2.includes(x))
*/

// =============================== && Solution && ==================================
const performIntersection = (arr1, arr2) => {
    // converting into set
    const intersectionResult = arr1.filter((item) => arr2.indexOf(item) !== -1);
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
