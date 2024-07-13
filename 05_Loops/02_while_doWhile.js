// Date : 13 July 2024
'use strict';

// WHILE LOOP :

let i = 0 ;
while (i <= 10) {
    // console.log(`Value of i is ${i}`);
    i = i + 2 ;
}

let myArray = ['Harshita', "Eti", "Rakhi"] ;

// Traverse Array :
i = 0 ;
while(i < myArray.length){
    // console.log(myArray[i]);
    i++ ;
}

let i2 = 0 ;
// this while loop doesn't work as condition is not true for even first iteration 
while (i2 > 1) {
    console.log(`While , Run ${i2 + 1} Times.`);
    i2++ ;
}

// More About While Loop :

// using for loop an task :
// for(let i = 1 ; i < 11 ; i++){
//     console.log(i);
// };

// Using while loop :
// let i = 1 ;
// while(i < 11){
//     console.log(i);
//     i++ ;
// }

/* What is While Loop : 
Now in the while loop,
it works a bit differently because for the while loop,
we can only specify a condition.
So while, and then just a condition
is the only thing that we can specify here.
So that's gonna be exactly the same as this one.
So we want to keep the loop running while repetitions
is less or equal 10.
And that's actually why this loop is called while.
So again, it's called the while loop
because it will run while this condition is true. */

/* Diff from the For loop : 
So the while loop
is more versatile than the for loop,
which means that it can be used
in a larger variety of situations.
And that's because it does not really need a counter
So you put the counter here because we need it
for this specific use case.
But all the while loop really needs is the condition
which needs to stay true for it to keep running.
And that condition can be any condition,
it doesn't have to be related to any counter at all.
And sometimes that's exactly what we need
to solve a certain problem.
So a problem without any counter,
so without a number that is increasing.
Example :
And so let's create such an example here.
So I will start by taking off this for loop,
we no longer need that one
and now we will do a simple example
that does not depend on a counter,
but instead it will depend on a random variable, okay.
So what we're gonna do is to basically roll a dice
and then keep rolling the dice until we roll a six.
And then when we roll a six, we stop.*/

let dice = Math.trunc(Math.random() * 6) + 1 ;
// console.log(dice) ; 
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1 ;
    if(dice === 6) console.log(`You rolled 6 , You Lost !`)
}

// DO WHILE LOOP :

// Do while is almost same as while loop nothing is much differ , do while provide just one advantage that do while work at least once even if provided condition is false whereas do while not .
do {
    console.log(`Do While , Run ${i2 + 1} Times.`);
    i2++ ;
} while (i2 > 1);