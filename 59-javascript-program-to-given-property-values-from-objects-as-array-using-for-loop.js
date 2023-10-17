/*
    Output

    [1, 4, 8]

    In the above program, the property value of key a is extracted from each object of an array.

        Initially, the extractedValue array is empty.
        The for loop is used to iterate through all the elements of an array.
        During each iteration, the value of property a is pushed to the extractedValue array.
*/
function extractValue(arr, props) {
    let extractedValue = [];

    for (let i = 0; i < arr.length; i++) {
        extractedValue.push(arr[i][props]);
    }
    return extractedValue;
}

const objArray = [
    { a: 1, b: 2 },
    { a: 4, b: 5 },
    { a: 8, b: 9 },
];

const result = extractValue(objArray, 'a');
console.log(result);

// [ 1, 4, 8 ]
