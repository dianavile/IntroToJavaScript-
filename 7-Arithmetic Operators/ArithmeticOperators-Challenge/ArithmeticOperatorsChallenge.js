/*jshint esversion: 6 */

// Challenge: Checkout Order Details

/*
 1. Create 3 variables to store an item price. The last price 2 items were ordered (multiplication).
 2. Tell the user what the total price is before discount.
 3. Inform the user what the average price of items is before discount.
 4. Inform them the final price after saving 5 dollars with promo code 'I Got 5 On It'.
*/

//step 1
const price1 = 5;
const price2 = 3;
const price3 = 7;

//step 2
const totalPrice = price1 + price2 + (price3 * 2);
//step3
const averagePrice = totalPrice / 4;
//step4
const finalPrice = totalPrice -5; 

console.log(totalPrice, averagePrice, finalPrice);


    
 


