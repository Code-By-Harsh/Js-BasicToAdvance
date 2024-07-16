// Date : 16 July 2024
'use strict' ;

const myNums = [1, 2, 3];

// find total of array elements :
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and current value: ${currval}`);
//     return acc + currval ;
// }, 0)
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0);
console.log(myTotal);

// dealing with API :
const shoppingCart = [
    {
        itemName: "iPhone",
        price: 99999 ,
    },
    {
        itemName: "VivoBook",
        price: 59999 ,
    },
    {
        itemName: "Portable Drone",
        price: 48500 ,
    },
    {
        itemName: "DSLR",
        price: 18999 ,
    },
]

// find total cost :
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

// Deal with transactions again :
const transactions = [100,-50,3000,200,-1600,-40 ,320,-900] ;

// let's find total balance after all deposit and withdrawals :
const balance = transactions.reduce((acc,cash) => acc + cash,0 );
console.log(balance);

// find , deposits total only :
// const deposits = transactions.filter((cash) => cash > 0 ) ;
// const depositsTotal = deposits.reduce((acc,cash) => acc + cash,0);
const depositsTotal = transactions.filter((cash) => cash > 0).reduce((acc ,cash) => acc + cash , 0);
console.log(depositsTotal);

// find , withdrawals total :
const withdrawalsTotal = 
transactions
.filter((tran) => tran < 0) // filter withdrawals
.map((total) => Math.abs(total)) // remove negtive sign
.reduce((acc,cash) => acc + cash , 0); // sum the all withdrawals
console.log(withdrawalsTotal)