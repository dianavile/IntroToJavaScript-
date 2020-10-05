/*jshint esversion: 6 */

// Function= way to store a code to re-use it.
function add() { 
    console.log('add');
    //return keyword, return string, boolean, value
    return 5;
}

//evoke the function to see the logic
add();
//the same item can be used multiple times.
add();
add();
//print out value
console.log(add());
//5

//functions can take in parameters
function add(num1) { 
    return num1;
}
console.log(add(10)); //pass in a value
console.log(add(15)); 
console.log(add(20)); 
//10, 15, 20

//functions can take in MULTIPLE parameters
//This function add() will add anytime 2 numbers that we need.
function add(num1, num2) { 
    return num1 + num2;
}
console.log(add(10, 6)); //pass in two values
console.log(add(15, 7)); 
console.log(add(20, 2)); 
//16, 22, 22


//solve problems to create re-usable code with functions.

