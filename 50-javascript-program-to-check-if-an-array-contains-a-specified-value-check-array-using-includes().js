/*
JavaScript Program to Check if An Array Contains a Specified Value

To understand this example, you should have the knowledge of the following JavaScript programming topics:

    JavaScript Array includes()
    JavaScript Array indexOf()
    JavaScript Arrays

*/

// Solution ===========================================================

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

if (hasValue) {
    console.log(`Array contains a value`);
} else {
    console.log(`Array does not conatain a value`);
}

// Solution ===========================================================

/*
Array contains a value.

In the above program, the includes() method is used to check if an array contains a specified value.

    The includes() method returns true if the value exists in the array.
    The if...else statement is used to display the result as per the condition.


*/
