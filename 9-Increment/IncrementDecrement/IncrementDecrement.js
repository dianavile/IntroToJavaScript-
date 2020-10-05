/*jshint esversion: 6 */

let example1 = 1;
//add + by 1
example1 = example1 + 1;
example1++;
//substract - by 1
example--;
//add + by >1
example1 = +5; // example1 = example1 + 5
//substract - by > 1
example1 = -5;
//multiply *
example1 *= 5;
// divide /
example1 /= 5;
//modules operator
example1 %= 5;


console.log(example1);
//1 (1)
//2 (1+1)
//3 (1+2)
//2 (3-1)
//7 (2+5)
//2 (7-5)
//10 (2+5)
//2 (10/2)
//5 (return whole number, because modulated by higher nomber)


