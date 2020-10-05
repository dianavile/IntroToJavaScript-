/*jshint esversion: 6 */
/* =to disable JSlint: "jslint.enable": false*/

//Declare variables
//if sting starts with a number, it will print out the number
let example1 = "33 Hello World 22";
let example2 = "44 Dylan 33";
let example3 = 55.3333;
let example4 = 200.0;

//Assign values to variables
example1 = parseInt(example1);
example2 = parseFloat(example2);
example3 = example3.toFixed(0);
example4 = example4.toFixed(2);

//Print in Console
console.log(example1);
//NaN
console.log(example2);
//44
console.log(example3);
//55
console.log(example4);
//200.00
console.log(typeof example1);
//number
console.log(typeof example2);
//number
console.log(typeof example3);
//string
console.log(typeof example4);
//string