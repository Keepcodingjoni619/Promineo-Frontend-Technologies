
//Assignment 1
// let ages = [3,9,23,64,2,8,28,93];
// let firstIndex = ages[ages.length - ages.length];
// console.log(firstIndex)

// let lastIndex = ages[ages.length - 1];
// console.log(lastIndex)

// let averageIndex = lastIndex - firstIndex;
// console.log(averageIndex)
// ages.push(24)
// console.log(ages)

// let sum = 0;
// for(let i = 0; i < ages.length; i++){
//     sum += ages[i]
// }
// console.log("Average: ", sum / ages.length)

// Assignment 2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


let num = 0;
for(let i = 0; i < names.length; i++){
    // num add and equals names array, access all the index, and all the average length in the index
    num += names[i].length
}
//num divide names array and length = 6
console.log('Total of letters in name array : ', num / names.length)

let con = names[0];
for(let i = 0; i < names.length; i++){
    con = con.concat(" ", names[i])
}
console.log('Concatenated names: ', con)

//Storing length for each names in the namesLength array
const nameLength = [];
for(let i = 0; i < nameLength.length; i++){
    nameLength= nameLength[i].length;
}

let sum = 0;
for(let i = 0; i < nameLength; i++){
    sum += nameLength[i];
}

console.log("Sum of each elements in nameLength array: ", sum);

function sayHello(word,n){
    let join = word;
    for(let i = 1; i <= n; i++){
        join = join.concat(word)
    }
    return join;
}

console.log("Concatenated words: ", sayHello("Hello",3))

function fullName(firstName, lastName){
    return firstName.concat(" ", lastName)
}
console.log("FullName: ", fullName("Johnnie","Candari"))

function greaterThan(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum > 100){
            return true;
        }else {
            return false;
        }
    }

}

var arr1 = [2,4,6,8,10];
var arr2 = [1,3,7];

function averageArray(arr){
    let sum = 0;
    for(let i = 0; i < arr; i++){
        sum += arr[i]
    }
    return (sum / arr.length)
}

function average(arr1,arr2){
   if(arr1 > arr2){
    return true;
   }else {
    return false;
   }
}
console.log("The total sum : ", greaterThan(arr1))
console.log("Compare average: ", average(arr1,arr2))

var hotOutside = true;
var moneyInThePocket = 30.5;
function willBuyDrink(isHotOutside, moneyInPocket)
{
if((isHotOutside) && (moneyInPocket > 10.50))
{
    return true;
}else{
    return false;
}}
console.log("Drink can be buy : ",willBuyDrink(hotOutside, moneyInThePocket));