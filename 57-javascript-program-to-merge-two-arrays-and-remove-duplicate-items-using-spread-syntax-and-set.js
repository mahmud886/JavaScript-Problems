/*
    JavaScript Program to Merge Two Arrays and Remove Duplicate Items

    To understand this example, you should have the knowledge of the following JavaScript programming topics:

        JavaScript Array concat()
        JavaScript Set and WeakSet
        JavaScript Spread Operator

*/

function getUniqueArrayAfterMerge(arr1, arr2) {
    let newArr = [...arr1, ...arr2];

    const uniqueArr = [...new Set(newArr)];
    console.log(uniqueArr);
}

const arr1 = [1, 2, 4, 6, 2, 3, 5, 7];
const arr2 = [1, 1, 4, 2, 5, 3, 8, 7];

getUniqueArrayAfterMerge(arr1, arr2);

/*
    OUTPUT: [ 1, 2, 4, 6, 3, 5, 7, 8 ]


    In the above program, two arrays are merged together and Set is used to remove duplicate items from an array.

    The Set is a collection of unique values.

    Here,

    Two array elements are merged together using the spread syntax ...
    The array is converted to Set and all the duplicate elements are automatically removed.
    The spread syntax ... is then used to include all the elements of the set back to an array.


*/
