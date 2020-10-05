/*jshint esversion: 6 */

//number
let example = 7;
console.log(example);
//7

//floating number with decimal spaces
let example1 = 7.77;
console.log(typeof example1);
//number

//parsInt to get entire number from floating number with decimal spaces
let example2 = 7.77;
console.log(parseInt(example2));
//7.77

//parsFloat to the floating number with decimal spaces from the entire number
let example3 = 7.77;
console.log(parseFloat(example3));
//7.77

//a stringified number with parseFloat and parseInt
let example4 = "7.77";
console.log(parseFloat(example4));
//7

let example5 = "7.77";
console.log(parseInt(example5));
//7

//toFixed()- to get decimal spaces from number-to round number up
let example6 = 7.77;
console.log(example6.toFixed(1));
//7.8

//toFixed(number)- to add decimal spaces on number
let example7 = 7.77;
console.log(example7.toFixed(5));
//7.77000

//toFixed(number)- to add decimal spaces on number
let example8 = 7.77;
console.log(example8.toFixed(2));
//7.77