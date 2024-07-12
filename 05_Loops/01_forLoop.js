// Date : 11 July 2024
'use strict' ;

// for - loop , Break , Continue :
for (let i = 0; i < 5; i++) {
    if(i === 3){
        // console.log("3 !");
    
        break ; // break , stop the execution of iteration immediately and exit the loop !

        // continue ; // continue , skip the furter execution of current iteration and jump to next iteration !
    }
    // console.log(i);
}

// We cannot access any private / local variable of any loop outside of that loop :
// console.log(i); 


const arr = ['Harsh','Aman','Naman','Lakhi','Rohit'];

// We Can Also Use For-Loop As :
let i = 1 ;
for( ;i < arr.length;){
    i++ ;
    // console.log(arr[i-1]) ;
}

// PRINT ALL ELEMENTS OF ARRAY :
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}

// PRINT TABLE OF 2 :
for(let i = 1 ; i <= 10 ; i++){
    console.log(`2 * ${i} = ${2 * i}`)
}

// PRINT ALL EVEN NUMBERS FROM 0 TO 20 :
for(let i = 1 ; i <= 20 ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Date : 12 July 2024 : More About For Loop

// For loop : instead of writting similar code again and again for complete some task , is not good practice at all as we dont follow "dont repeat yourself rule of coding" , hence instead of writting these :

// 1️⃣. To Reduce repetative Code :
// console.log("10 kg weight Lifted 1 time done 💪");
// console.log("10 kg weight Lifted 2 time done 💪");
// console.log("10 kg weight Lifted 3 time done 💪");
// console.log("10 kg weight Lifted 4 time done 💪");
// console.log("10 kg weight Lifted 5 time done 💪");
// console.log("10 kg weight Lifted 6 time done 💪");
// console.log("10 kg weight Lifted 7 time done 💪");
// console.log("10 kg weight Lifted 8 time done 💪");
// console.log("10 kg weight Lifted 9 time done 💪");
// console.log("10 kg weight Lifted 10 time done 💪"); 

// Instead these 10 repetative lines Use For loop as :

// for(let i = 1 ; i <= 10 ; i++ ){
//     console.log(`10 kg weight Lifted ${i} time done 💪`);
// }

// 2️⃣. To Read an array :
const harsh = [ 'Harsh' , 'saini' , '19' , 2004 , 'student' , true] ;

// console.log(harsh[0]);
// console.log(harsh[1]);
// ...
// console.log(harsh[5]);

// Instead of writing same code for each element try for loop as :

// for(let i = 0 ; i < harsh.length ; i++){
//     console.log(harsh[i]);
// }

// 3️⃣. Copy an array elements to another :
const harshNew = [] ; // let insert all harsh array's element into this :

// harshNew.push(harsh[0]);
// harshNew.push(harsh[1]);
// ...
// harshNew.push(harsh[5]);

// Instead of doing this stuff , use for loop :

// for(let i = 0 ; i < harsh.length ; i++){
//     // Types of copying :
//     // 1. using simple assigning method :
//     // harshNew[i] = harsh[i] ;
//     // 2. using push method :
//     harshNew.push(harsh[i]) ;
// }
// console.log(harshNew);

// 4️⃣. To apply some operation on an array :
const birthYears = [1947,1989,2004,2012,2019]; 
const ages = [] ;

// using functions :
const calcAge = birthYears => (2024 - birthYears) ;
// const agesByFunction = [calcAge(birthYears[0]),calcAge(birthYears[1]),calcAge(birthYears[2]),calcAge(birthYears[3]),calcAge(birthYears[4])];
// console.log(agesByFunction);

// Without Functoins :
// ages[0] = calcAge(birthYears[0]);
// ages[1] = calcAge(birthYears[1]);
// // ...
// ages[4] = calcAge(birthYears[4]);
// console.log(ages);

// Let's assign ages to respective of birthYears :
for(let i = 0 ; i < birthYears.length ; i++ ){
    ages.push(2024 - birthYears[i]);
}
console.log(ages);