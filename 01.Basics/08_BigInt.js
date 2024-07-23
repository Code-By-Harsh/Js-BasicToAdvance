// Date : 23 July 2024
'use strict' 

// numbers are represented internally as 64 bits. And that means that there are exactly 64 ones or zeros to represent any given number.Now of these 64 bits only 53 are usedto actually store the digits themselves.The rest are for storing the position of the decimal point and the sign.Now, if there are only 53 bits to store the number,that means that there is a limit of how big numbers can be,and we can calculate that number.

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// after this number , calculated numbers not repersent accurately
console.log(2 ** 53 + 0); // 9007199254740992
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994
// ...

// BigInt : Introduce in ES2020 and they can repersents or store numbers as large we want. so no matter how big .
console.log(9849485513402374497275487172347129388439); // 9.849485513402374e+39
// if we use the n , then this will be a BigInt :
console.log(9849485513402374497275487172347129388439n); // 9849485513402374497275487172347129388439n
// or this way only be used with small numbers as it change the actual value :
console.log(BigInt(9849485513402)); // 9849485513402n

// Operations :

console.log(10000000n + 10000000n); // 20000000n
console.log(10000000n * 10000000n); // 100000000000000n

console.log(10n > 20); // false
console.log(10n > 5); // true
console.log(10n == 10); // true
console.log(10n === 10); // false
console.log(typeof 10n); // bigint

console.log(21n / 10n); // 2n
console.log(29n / 10n); // 2n
console.log(21 / 10); // 2.1
console.log(29 / 10); // 2.9

// we would get error if we try to do operation between bigint and normal integer / number :
const num = 10;
const bignum = 100n;
// console.log(num * bignum); // Get error
console.log(BigInt(num) * bignum); // 1000n

// Math Operation also not work with bigint :
// console.log(Math.sqrt(2n)); // Get error
