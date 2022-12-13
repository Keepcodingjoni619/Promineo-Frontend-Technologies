//Javascript Week 2 - Loops

// Multiplication Table: Create a for loop that prints out a multiplication table for num from 1 through 10 as follows (the value of num will be input by the user):
// var num = 4;
// for(var i = 1; i <= 10; i++){
//     console.log(num + " x " + i + " = " + (num*i));
// }

// Do/While Loop: Create a do/while loop that will print the already declared variable userNumber and then add 6 each time through the loop. Stop the loop once the number is greater than or equal to 100.

// var userNumber = 4;
// do{
//     console.log(userNumber);
//     userNumber = userNumber + 6;
// }while(userNumber <= 100)


// Countdown: Write a while loop that does a count down using the already declared variable countdown. This variable is initialized to the number that a user enters.

// Check to make sure the number is not larger than 10, but greater than or equal to 3 Each time the loop runs, print to the console the value of the counter followed by three periods (…) Once out of the loop, print to the console "We have lift off!" If a number is less than 3 or greater than 10, then the only message printed to the console is "We have lift off!"
// If the user inputs 3, the output should be:
// 3…
// 2…
// 1…
// We have lift off!

// var countDown = 3;
// if(countDown <= 10 && countDown >= 3){
//     while(countDown >= 1){
//         console.log(countDown + "...")
//         countDown--;
//     }
// }
// console.log("We have lift off!")

// Let's play a game: This is an advanced problem!
// Rules of this Game:

// The game will consist of 100 turns. If the number of turns is even, you gain 5 points. If the number of turns is odd, you gain 3 points. If ever your score is equal to 125, you are reset back to 25 points. This will only be allowed to happen once. The game ends if you are able to make it through 100 turns or you reach more than 290 points, whichever comes first.
// Using a for loop, and the two already declared variables points and pointsReset, create the game.

// var points = 0;
// var pointReset = false;

// for(var i =0; i < 100 && i < 290; i++){
//     if(points === 125 && pointReset === false){
//         points = 25;
//         pointReset = true;
//     }else if(i % 2 === 0){
//         points = points + 5;
//     }else {
//         points = points + 3;
//     }
//     console.log("Turns " + i + " Score: " + points);
// }

// For Loop 1 to 100: Write a for loop that loops from 1-100. If the iteration count is even, prints the iteration count and " foo"
for(var i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i + " foo ")
    }
}

// For Loop 0 to x: Write a for loop that prints the numbers 0 to x. The x is an already declared variable. x has been initialized for you and will be based on a user's input.
// var x = 0;
// for(var i = 0; i <= x; i++){
//     console.log(i);
// }


// Fill Up A Bowl With Rice: Using the supplied variables requiredCupsOfRice and currentCupsOfRice, create a loop of your choice that will add cups of rice to a bowl.

// Each time a cup of rice is added, print the following: "The bowl contains " + currentCupsOfRice + " cups of rice." currentCupsOfRice in this example is the current number of cups of rice in the bowl, which will get incremented to indicate that you have added a cup of rice to the bowl. Once the number of cups called for has been reached, print "We have enough rice!"

// var requiredCupOfRice = 5;
// var currentCupOfRice = 0;
// while(currentCupOfRice !== requiredCupOfRice){
//     console.log( 'The bowl contains ' + (++currentCupOfRice) + ' cups of rice.')
// }
// console.log('We have enough rice!')

// For Loop: Write a for loop that prints every third number from 0 up to, and including, 99.

// for(var i = 0; i <= 99; i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
// }

// While Loop: Check to see if userNumber is between 1 and 100. If it is, create a while loop that prints all integers starting with userNumber to 100. If not, print "Your number was not between 1 and 100."
// var userNumber = 1;
// var counter = userNumber;
// if(userNumber <= 100 && userNumber >= 1){
//     while(counter <= 100){
//         console.log(counter++)
//     }
// }else{
//     console.log("Your number was not between 1 and 100.")
// }

// var points = 0;
// var pointsReset = false; 

//write your code here
// for(var i = 0; i < 100 && points < 290; i++){
//     if(points == 125 && pointsReset === false){
//         points = 25;
//         pointsReset = true;
//     } else if(i % 2 === 0){
//         points = points + 5;
//     } else {
//         points = points + 3;
//     }
    
//     console.log("Turns: " + i + " Score: " + points)
