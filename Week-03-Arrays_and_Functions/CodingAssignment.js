
//Assignment 1
let ages = [3,9,23,64,2,8, 28,93];

ages.push(27);
console.log(ages)
console.log(ages[ages.length - 1] - ages[0]);

let sum = 0;
let average = 0;
for(let i = 0; i < ages.length; i++){
    sum = sum + ages[i];
}
average = sum / ages.length;
console.log("The average age in the array is: ", average)

//Assignment 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let amountTotal = 0;
let averageLetters = 0;
for(let i = 0; i < names.length; i++){
    amountTotal = amountTotal + names[i].length;
}

averageLetters = amountTotal / names.length;
console.log(averageLetters)

let concatNames = '';
for(let i = 0; i < names.length; i++){
    concatNames = concatNames + names[i] + " ";
}
console.log(concatNames)
console.log(names[names.length - 1])
console.log(names[0])
// console.log(names[names.length - names.length])

let namesArray = ['Zach', 'Kelly', 'Lisa', 'Screech', 'Jessie']
let namesLength = [];
for(let i = 0; i < namesArray.length; i++){
    namesLength.push(namesArray[i].length);
}

console.log(namesLength)

let anotherAverage = 0;
for(let i = 0; i < namesLength; i++){
    anotherAverage = anotherAverage + namesLength[i];
}
console.log(anotherAverage)

// function reverseString(word){
//     let reverseWord = '';
//     for(let x = word.length - 1; x >= 0; x--){
//         reverseWord += word[x]
//     }
//     return reverseWord;
// } 
// console.log(reverseString("Hello"))

function sayHello(word, n){
    let totalCount = 1;
    let newResult = "";
    while(totalCount <= n){
        newResult = newResult + word;
        totalCount++;
    }
    return newResult;
}
console.log(sayHello("Hello", 4))


function name(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName
}
console.log(name("Kate", "Miller"))

function arrayNumbers(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    if(sum > 100){
        return true;
    } else {
        return false
    }
}


function average(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return (total / array.length)
}



function newArray(num1, num2){
   if(average(num1) > average(num2)){
    return true;
   }else {
    return false;
   }
}

let num1 = [2,3,6,9,20];
let num2 = [10,3,2]

console.log("is num1 greater than 100", arrayNumbers());
