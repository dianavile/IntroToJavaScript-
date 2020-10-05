/*jshint esversion: 6 */

// Challenge: Total Price

/*
 1. Give our customer their total price. 
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price. 
*/


const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

let total = 0;

//for (let i = o; i < cartItems.lenght; i++) { 
//  total += cartItems[i].price * cartItems[i].quantity;
//}

for (const cartItem of cartItems) { 
  total += cartItem.price * cartItem.quantity;
}

// total = total + 1.08;
total += 1.08; //add 8% tax value
console.log(total);
//27
//29,1600000
