/*
    Output

    [1, 4, 8]

    In the above program, the property's value of key a is extracted from each object of an array.

    The map() method is used to iterate through all the elements of an array and extract property values of key a.

    Note: You could also use a regular function instead of an arrow function.

    let extractedValue = arr.map(function(item) {return item[prop]});

*/

function extractValue(arr, props) {
    let extractedValue = arr.map((item) => item[props]);
    return extractedValue;
}

const objArray = [
    { a: 1, b: 2 },
    { a: 4, b: 5 },
    { a: 8, b: 9 },
];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);


// [ 1, 4, 8 ]
