// Date : 16 July 2024 
'use strict' ;

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const increase10 = myNumers.map( (num) => { return num + 10})
// console.log(increase10);

// Using some Real World Example :
const transactions = [100,-50,3000,200,-1600,-40 ,320,-900] ;
// Log the data about Deposit or Withdrawal :
const deposit = transactions.map((cash , index) => {
    // if(cash > 0){
    //     console.log(`Tranasaction ${index}: You Deposit ${cash}`)
    // }else if(cash <0){
    //     console.log(`Tranasaction ${index}: You Withdrawal ${cash}`)
    // }
    // console.log(`Tranasaction ${index}: You ${cash > 0 ?'Deposit':'Withdrawal'} ${cash}`);
});

// Filter and store the deposit and withdrawals in arrays :
const depositOnly = transactions.filter((cash) => cash > 0);
const WithdrawalOnly = transactions.filter((cash) => cash < 0);
// console.log(depositOnly);
// console.log(WithdrawalOnly);

// Ages of a Group :
const ages = [2,18,29,42,8,12,53,6,22,69,4] ;

// finding the people who are adults :
// const adults = ages.filter((age) => age <= 18);
const adults = ages.map((age) => {
    if(age > 18) return 0 ;
    else return age ;
}).filter((age) => age > 0);
console.log(adults)