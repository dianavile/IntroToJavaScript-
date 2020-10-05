/*jshint esversion: 6 */

//Controlflow If statement
let example = 5;

//to run code only for a specific reason, use If-statement
//An If-statement is a gatekeeper to evaluate the logic to tell is something is true or false.
//to evaluate 1 statement at the time
if (example === 6) {
    console.log("Run");
    //false, the code nested in the curly braces never executes
} //else if-statement runs only if the main statement fails.
else if (true) {
    console.log("else if");
} else {
    console.log("else");
}

//&& statement = to evaluate >1 statement at the time
let example2 = 5;

if (example2 === 6 && true === true) {
  console.log("Runs");
} else if (false) {
  console.log("else if");
} else {
  console.log("else");
}

//II OR statement = to evaluate >1 statement at the time
let example3 = 5;

if (example3 === 6 || false  === true) {
  console.log("Runs");
} else if (false) {
  console.log("else if");
} else {
  console.log("else");
}

//to concatenate conditions and check multiple conditions.
