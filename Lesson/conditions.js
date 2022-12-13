// var firstName = 'Sam';

// if(firstName === 'Sam'){
//     console.log(`Hello ${firstName}`);
// }
// else {
//     console.log('Not my firstName');
// }  

// var costOfMilk = 1.99;
// if(costOfMilk < 2){
//     console.log('We will buy 2 gallon')
// } else if(costOfMilk < 3){
//     console.log('We will buy 1 gallon')
// } else {
//     console.log('Milk is too expensive.')
// }

var grade = 'A'; 
switch(grade){
    case "A" :
        console.log("90-100");
        break;
    case "B" :
        console.log('80-89');
        break;
    case "C" :
        console.log('70-79')
        break;
    case 'D' : 
        console.log('60-69');
        break;
    case 'F' :
        console.log("50-59");
        break;
    default :
        console.log("You're failing!")
        break;
}

var a = 5;
var b = 6;
if(a == 5){
    if(b == 6){
        console.log("a is 5 and b is 6.")
    }
} 

// Logical AND operator
// if(a == 5 && b == 6){
//     console.log("a is 5 and b is 6")
// }


var costOfEggs = 4.00;

var numberOfDozensOfEggsToPurchase = 0;

if (costOfEggs > 3) {

numberOfDozensOfEggsToPurchase = 1;

} else if (costOfEggs > 2) {

numberOfDozensOfEggsToPurchase = 2;

} else if (costOfEggs > 1) {

numberOfDozensOfEggsToPurchase = 3;

} else {

  numberOfDozensOfEggsToPurchase = 4;

}

console.log('I will buy ' + numberOfDozensOfEggsToPurchase + ' dozen eggs.');