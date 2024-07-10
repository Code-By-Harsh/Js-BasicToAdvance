// Date : 9 July 2024
'use strict' ;
// var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  console.log('INNER: ', a, b);
}

// console.log(a);
// console.log(b); // can not access b as it define in if-else block
// console.log(c);  

// Date : 10 July 2024 
// Scope level and mini hoisting in js :

// nested scope :
function levelOne() {
  const userName = 'Hari';

  function levelTwo() {
    const userId = 9103;
    // Can we access userName ?
    console.log(`Username : ${userName}`);
  }

  // Can we access userId out of levelTwo Scope ? : No !
  // console.log(`UserID : ${userId}`);

  // Calling levelTwo function :
  levelTwo();
}

// Calling levelOne function :
levelOne();