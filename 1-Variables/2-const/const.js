/*jshint esversion: 6 */

/*You are not allowed to reassign CONST variables, they can´t be changed*/

/*Flexibility is not always something you need
let= flexibility, use to re-assign a value
const=static, use to fixed values */
const buildDate = "October 25, 2015";

let releasedDate;
releasedDate = "October, 27th, 2011";

console.log(releasedDate);//undefined.
console.log(buildDate);


// Challenge: It your Dog's Birthday!

/*
 Create 2 variables related to your dog. Make one of them its age and update it by one.
 Log out all the values in a friendly way of your choosing.
 
 Update: How might we change our variable challenge to use const?
*/

const name = "Gator";
let age = 1;
age = age + 1;

console.log('My dog ' + name + ' is turning ' + age + '.');