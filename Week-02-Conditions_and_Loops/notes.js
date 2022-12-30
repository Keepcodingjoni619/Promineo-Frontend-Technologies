//  1. What are the different loops JavaScript provides us with?
//  For Loop- keep iterating until the value is false
//  While loop - if the statement is true the statement will run in an infinite loop until the statement is finish
//  Do Loop - Loop keep running until value is false and also runs once.

// 2. What is the syntax of one of the loops in your above answer? How and when should you use this loop? Give an example.
//     * if we want to repeat something multiple times, we would use a for loop.

// const number = [1,2,3,4]
//         for(let i = 0; i < number.length; i++){
//             console.log(i);
//         }

// // 3. What is the syntax of another one of the loops in your above answer? How and when should you use this loop? Give an example.
// //while loop keep run until the statement is complete
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
//     if(i === 5) {
//         break;
//     }
// }

// let upload = 99;
// while(upload < 100){
//     console.log("Website is loading")
//     upload++;
// }
// console.log("loading is done!") 

// let total = 0;

// while(total < 30){
//     total += Math.floor(Math.random() * 1) + 1;
//     console.log(total)
// }

// 4. What is the syntax of another one of the loops in your above answer? How and when should you use this loop? Give an example.
// Do while loop will run the statement first and check to see if the condition is true

// 5. What is your favorite thing you learned this week?
//     * My favorite is practicing conditionals. Conditionals become very helpful when writing out functions.


let i = 0;

 do{
    console.log(`The number is ${i}`)
    i++;
}while(i <= 10)
