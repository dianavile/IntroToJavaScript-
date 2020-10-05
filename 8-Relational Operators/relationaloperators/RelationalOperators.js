/*jshint esversion: 6 */

/* JS is a dynamically typed language.
* You can switch datatypes easily.
Yet most languages are steadily typed languages,
you can NOT switch dataypes there.
You need to create a new variable.
*/

// Relational Operators compare two items and return a boolean value
let example1 = 10;
let example2 = 15;//10 '10'
example2 = true; //set to boolean

//equal
console.log(example1 >= example2);
//false
console.log(example1 <= example2);
//true
console.log(example1 = example2);
//false
console.log(example1 == example2);
//true
console.log(example1 === example2);
//true

//not equal
console.log(example1 != example2);
//true
console.log(example1 !== example2);
//true

//search for datatype
console.log(typeof example1);//number
console.log(typeof example2);//number

//loosely equal statement =less strict comparison
console.log(example1 == example2);
// false
// strictly comparison
console.log(example1 === example2);
// true (if example2= 10 as well)
console.log(example1 === example2);
// false (if example2= '10' )string
//=== checks type AND value





