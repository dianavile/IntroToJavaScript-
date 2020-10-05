/*jshint esversion: 6 */

let example1 = 1;

//add or substract by one
example1 = example1 + 1;
example1++;
example1--;

//add or substract by >1
example1 += 5; // OR: example1 = example1 + 5;
example1 -= 5;
//multiply 
example1 *= 5;
//divide
example1 /= 5;
// modular%

let example2 = 13;
example2 %= 5;

console.log(example1);
//2 (1+1)
//7 (2+5)
//2 (7-5)
//10 (2+5)
//2 (10/5)
//3 (remainder)
