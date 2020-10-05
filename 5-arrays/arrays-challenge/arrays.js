/*jshint esversion: 6 */

// Challenge - Manage Inventory
/*
    1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
    2. Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
    3. Sanitizer sells out. Remove it from the list.
    4. Business is so good the company launches a new product: Bleach. Add it to the list.
    
    Note: After creating the initial array do not just create a brand new array. Modify it accordingly.
*/

//step 1
const Products = ["toilet paper", "bottled water", "sanitizer"];
//step 2
Products[0] = "paper towels";
//step 3
Products.pop();//remove the last value
//step 4
Products.push("Bleach");//add values

console.log(Products);
//(3) ["paper towels", "bottled water", "Bleach"]

