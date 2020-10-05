/*jshint esversion: 6 */
//Challenge: Booleans in JavaScript
//truthy falsy

let example1 = false;
let example2 = true;
let example3 = null;// empty placeholder = falsy value
//let example4 = undefined; //a var/property that doesn´t exist
let example5 = ""; //empty string = falsy value
let example6 = NaN;//Not a Number
let example7 = -5;//negative numbers = true true
let example8 = 2;//positive numbers = true value
let example9 = 0;// number 0 = falsy value

console.log(Boolean(example1));
//false
console.log(Boolean(example2));
//true
console.log(Boolean(example3));
//false
console.log(Boolean(example4));
//false
console.log(Boolean(example5));
// false
console.log(Boolean(example6));
//false
console.log(Boolean(example7));
//true
console.log(Boolean(example8));
// true
console.log(Boolean(example9));
// false

//https://scrimba.com/learn/introtojavascript/challenge-booleans-in-javascript-cGLpnuR
