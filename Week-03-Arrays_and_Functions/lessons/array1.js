let customerNames = [];
customerNames.push("Sam");
customerNames.push("Miller");

for(let i = 0; i < customerNames.length; i++){
    console.log(customerNames[i])
}
 for(name of customerNames){
    console.log(name)
 }

// var firstName = "Mary";
// var lastName = "Brown";
// var assignmentOne = 100;
// var assignmentTwo = 79;
// var assignmentThree = 80;
// var assignmentFour = 90;
// var assignmentFive = 100;

// console.log("Student: " + firstName + " " + lastName);
// console.log("Grades:");
// console.log("1: " + assignmentOne);
// console.log("2: " + assignmentTwo);
// console.log("3: " + assignmentThree);
// console.log("4: " + assignmentFour);
// console.log("5: " + assignmentFive);


// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [100, 79, 80, 90, 100];

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let i = 0; i < 5; i++) {
// console.log((i+1) + ": " + gradesArray[i]);
// }

// let fullName = "Johnnie" + " " + "Candari";
// let gradesArray = [100, 79, 80, 90, 100];
// let counter = 1;

// console.log("n/nStudent: " + fullName);
// console.log("Grades: ");
// for(let grade of gradesArray){
//     console.log(counter++) + ": " + grade;
// }

// let fullName = "Mary" + " " + "Brown";
// let gradesArray = [100, 79, 80, 90, 100];
// let counter = 1;

// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let grade of gradesArray) {
// console.log((counter++) + ": " + grade);
// }

// // Now Add Another Grade
// gradesArray.push(85);
// // Reset the counter to 1;
// counter = 1;
// console.log("\n\nStudent: " + fullName);
// console.log("Grades: ");
// for (let grade of gradesArray) { 
// console.log((counter++) + ": " + grade);
// }

let fullName = "Johnnie" + " " + "Candari";
let gradesArray = [100, 79, 80, 90, 100];
let counter = 1;

console.log("Student: " + fullName);
console.log("Grade: " );
for(let grade of gradesArray){
    console.log((counter++) + " : " + grade)
}