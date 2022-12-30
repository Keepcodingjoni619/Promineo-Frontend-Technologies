var averageNumberOfLetter = 0;

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// console.log(names.length)
// Array hold 6 values

//Create a for loop to iterate through the names array
for(i = 0; i < names.length; i++){
//     //created a variable called averageNumber of letters
//     //And assign averageOfNumberOfLetter + the nam
    averageNumberOfLetter = averageNumberOfLetter + names[i].length
    console.log(averageNumberOfLetter)
}


console.log(averageNumberOfLetter)
console.log("Average number of letters :", averageNumberOfLetter/ names.length)


let joinForces = names[0];
for(i = 1; i < names.length; i++){
    joinForces = joinForces.concat("", names[i])

}
console.log("Concat names" , joinForces)

var nameLengths = [];
for(i = 0; i < names.length; i++){
    nameLengths = names[i].length;
}
var result = 0;
for(i = 0; i < nameLengths.length; i++){
    result = result + nameLengths[i];
}

console.log("The sum of nameLength array is : ", result)
console.log("\n\n\n")