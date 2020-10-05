/*jshint esversion: 6 */

// Objects {} can take in properties
//add multiple datatypes in objects
let example1 = {
  //propertyname (objectkey) with values
  firstName: "Diana",
  lastName: "Vilé",
  address: {
    city: "Barcelona",
    country: "Spain",
  },
  age: 43,
};

example1.age = 44;

console.log(example1);
console.log(example1.address.city);
console.log(example1.age);
//to get all object keys
console.log(Object.keys(example1));
//to get all Object values
console.log(Object.values(example1));
//to check if property(key) exist on object
console.log(example1.hasOwnProperty('firstName2'));
//false, because that key does NOT EXIST in our <object data="" type="" className=""></object>

