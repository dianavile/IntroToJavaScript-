/*jshint esversion: 6 */

// repeat code
// NO amount of answers= no switch case
// NOT know lenght of Array = 
// NOT know amount of iterations run
// RUN until value = true = while loop

//While loop runs until value is false
let count = 0;

while (count < 20) {
//do something
    count++;
}
console.log(count);

// (count > 20)this never runs, false statment

let count1 = 0;

while (true) {
    count++;
    if (count < 20) { 
        //do this
        break;
    }
}
console.log(count);

//while loops are a way to run your code 
//for a set amount of UNKNOWN times
//while a condition is true.


//While Loop (if statement is false, while loop never runs)
//Do While loop (if statement is false, do while loop executes at least 1 time)

let count2 = 0;

do {
    count2++;
    if (count2 < 20) {
        break;
    }
} while (false); 
console.log(count2);
//1 iteration


//It is very rare to use While or DoWhile loop
//Only if you do NOT have any way of knowing
//how many iterations (UNKNOWN)
//to check a value untill you get a right value
//to break you out of it.

//set amount of unknown iterations
// a good way to create an infinite loop to crash your program.
//better not to use it, only in case needed.