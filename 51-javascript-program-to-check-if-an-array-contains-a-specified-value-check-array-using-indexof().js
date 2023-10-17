/*
JavaScript Program to Check if An Array Contains a Specified Value

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript Array includes()
    JavaScript Array indexOf()
    JavaScript Arrays

*/

// solution =================================================

// program to check if an array contains a specified value

const array = ['you', 'will', 'learn', 'javascript'];
const hasValue = array.indexOf('javascript' !== -1);

if (hasValue) {
    console.log(`Array contains a value`);
} else {
    console.log(`Array does not contain a value`);
}

// solution =================================================

/*

    In the above program, the indexOf() method is used with the if...else statement to check if an array contains a specified value.

    The indexOf() method searches an array and returns the position of the first occurrence. If the value cannot be found, it returns -1.

    Note: Both includes() and indexOf() are case sensitive. Hence, J and j are different.

*/
