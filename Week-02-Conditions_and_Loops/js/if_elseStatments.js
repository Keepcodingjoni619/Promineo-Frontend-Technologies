
/* What Is My Letter Grade? Write a series of if/else if statements using the already declared variables numberGrade and letterGrade that check the numberGrade and assign letterGrade to a string of the corresponding letter grade. Print the letter grade to the console. */

// var numberGrade = 60;
// var letterGrade;

// if(numberGrade >= 90){
//     letterGrade = "A";
// } else if(numberGrade >= 80){
//     letterGrade = 'B';
// } else if(numberGrade >= 70){
//     letterGrade = " C"
// } else if(numberGrade >= 60){
//     letterGrade = "D";
// } else {
//     letterGrade = "F";
// }

// console.log(letterGrade)


/* 
Print the Larger Number: Write an if else/if statement that compares num1 to num2 and prints the larger of the two. If they are equal, print "num1 is equal to num2"
*/
// var num1 = 9;
// var num2 = 6;
// if(num1 == num2){
//     console.log("num1 is equal to num2!")
// } else if (num1 < num2){
//     console.log(num2)
// } else {
//     console.log(num1)
// }


/* 
Which Month Is It? Write a switch statement to check the value of the already declared variable monthNumber and then when the match is made, print out the name of that month in a string.

Example: if the monthNumber is 7, print out "July" to the console. If the monthNumber is not between 1 and 12, print out "Invalid Month" to the console.
*/
// switch(monthNumber){
//     case  1 : 
//         console.log("January")
//         break;
//     case 2 : 
//         console.log("February");
//         break;
//     case 3 : 
//         console.log("March");
//         break;
//     case 4 : 
//         console.log("April");
//         break;
//     case 5 : 
//         console.log("May");
//         break;
//     case 6 : 
//         console.log("June");
//         break;
//     case 7 : 
//         console.log("July");
//         break;
//     case 8 : 
//         console.log("August");
//         break;
//     case 9 : 
//         console.log("September");
//         break;
//     case 10 : 
//         console.log("October");
//         break;
//     case 11 : 
//         console.log("November");
//         break;
//     case 12 : 
//         console.log("December");
//         break;
//     default: 
//         console.log("Invalid Month")
// }

/*
Print The Smaller Number: Write an if/else if statement that prints the smaller of the two given inputs, num1 and num2. If they are the same, print "same"
*/

// var num1 = 3;
// var num2 = 3;
// if(num1 == num2){
//     console.log("Same")
// }else{
//     console.log("3 is bigger")
// }

/*
Old Enough To Drive? Write an if statement that checks if the given age is greater than or equal to 16. If it is, set canDrive to true and print it's value to the console. Use the already declared variables of age and canDrive.
*/

var age = 16;
var canDrive = false;
if(age >= 16){
    canDrive = false;
    console.log(canDrive)
}