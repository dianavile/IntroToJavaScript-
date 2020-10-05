/*jshint esversion: 6 */

// Switch Statement

let studentAnswer = "C";

switch (studentAnswer) {
  case "A":
    console.log("A is wrong.");
    break;
  case "B":
    console.log("B is wrong.");
    break;
  case "C":
    console.log("C is correct.");
        break;
    //default value, no break needed.
    default:
        console.log("Not a real answer.");
}

//pass in a value, check case if it matches,
//make sure you break, to make your logic work properly
//add a default answer without break.