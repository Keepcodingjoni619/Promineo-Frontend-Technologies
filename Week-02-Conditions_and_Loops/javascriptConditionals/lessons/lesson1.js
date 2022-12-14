var firstName = "Sam";

if(firstName === "Sam"){
    console.log('Hello, Sam!')
}else {
    console.log("Hey,  " + firstName)
}

var costOfMilk = 3;
if(costOfMilk < 2){
    console.log("We will buy 2 gallon")
} else if(costOfMilk < 3){
    console.log("We will buy only 1 gallon")
}else {
    console.log("No thanks, way to expensive!")
}

var grade = "C";
switch(grade){
    case 'A' :
        console.log("90-100")
        break;
    case 'B' : 
        console.log("80-90")
        break;
    case 'C' : 
        console.log("70-80");
        break;
    case 'D' : 
        console.log("60-70");
        break;
    case 'F' : 
        console.log("0 - 60");
        break;
    default : 
        console.log("No Grade");
}


// nested 
var a = 5;
var b = 6;

if(a === 5){
    if(b === 8){
        console.log("a is 5 and b is 6.")
    }else {
        console.log("a is 5 but be is not 6.")
    }
}

if(a === 5 && b === 6){
    console.log("True")
}