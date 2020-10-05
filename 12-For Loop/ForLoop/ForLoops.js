/*jshint esversion: 6 */


/* FOR LOOP- ITERATION KNOWN
* statement1: Instanciate a counter variable i (= iteration)
* statement2: the loop continues to run until the statement no longer is true
* statement3: increase every iteration by 1 */

let total = 0;

for (let i = 0; i < 5; i++) { 
    console.log(i);
    total += 1;
}
console.log(total);

// 0,1,2,3,4,5
//total: 10

/* FOR LOOP- ITERATION UNKNOWN*/
let totalNumber = 0;
let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
  total += numArray[i];//every iteration
}
console.log(total);
//360
