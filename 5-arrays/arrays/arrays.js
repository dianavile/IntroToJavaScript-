/*jshint esversion: 6 */

//to deal with multiple values
//instantiate an array with square brackets.
let example1 = [5, 7, 6]; 

//methods in Arrays
example1.push(8, 9, 10);//add values
example1.pop(10);//remove the last value

example1[0] = 1;//override values


//iterate trough the entire array- forEach statment
//the element is the current index value
example1.forEach((element) => {
    console.log(element);
}); 
//1
//7
//6
//8
//9
//[1, 7, 6, 8, 9]
    
console.log(example1.length);
//3
//5

console.log(example1);
//[1, 7, 6, 8, 9]

//array start on the 0 index.
//the lenght is always 1 greater than the last index value.
console.log(example1[0]);//5
console.log(example1[1]);//7
console.log(example1[2]);//6
console.log(example1[3]);//null-undefined


