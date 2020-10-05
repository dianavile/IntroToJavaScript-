/*jshint esversion: 6 */

// Challenge: Analytics

/*
 1. Track our user's activity.
 2. While the total updates is under 10 updates keep logging the update count.
 3. After we reach our threshold say, 'No longer tracking the user'.
 4. Change the logic to a do while with it updating just a single time. 
*/
//WHILE LOOP
let totalUpdates = 0;

while (totalUpdates < 10) { 
    totalUpdates++;

    console.log(totalUpdates);
}

console.log("No longer tracking the user");

//DO WHILE LOOP
let totalUpdatesA = 10;

do {
    totalUpdates++;

    console.log(totalUpdatesA);
}
while (totalUpdatesA < 10);

console.log("No longer tracking the user");
//11
//No longer tracking the user.


//Do While is always running once, regardless of the condition.


