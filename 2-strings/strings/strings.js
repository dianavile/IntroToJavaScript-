/*jshint esversion: 6 */

let firstName = " Diana";
let lastName = " Vilé";

//console.log(typeof name);//to know the datatype
console.log(firstName + "" + lastName);

//string interpolation ``
console.log(`${firstName}${lastName}`);

//JS strings come with methods that allow to do certain things.
//there are over 20 methods (for any datatype and string properties) in JS.
//string property= a method = a function (a set of instructions).

//.lenght
console.log(`             ${firstName}${lastName}`.length);
//this returns 24 spaces.

//.trim() property= to remove empty space 
console.log(
  `             ${firstName}${lastName}          
`.trim().length
);

//toUppercase- to change the entire word into capitals
console.log(`${firstName}${lastName}`.toUpperCase());

//toLowercase- to change the entire word into small letters
console.log(`${firstName}${lastName}`.toLowerCase());

//split()- takes in a parameter to a value used to this method
//pass in one empty space on each variable
console.log(`${firstName}${lastName}`.split(' '));
//pass in one empty space on each empty character
console.log(`${firstName}${lastName}`.split(''));

