
//String
const name1 = 'Jane';
const name2 = new String('Jane');
console.log("This is a string", name1)
console.log("This is an object with a string", name2);

//Numbers
const num1 = 5;
const num2 = new Number(5);
console.log("This is a number:", num1);
console.log("This number is inside an object:", num2);

//Boolean
const boo1 = true;
const boo2 = new Boolean(true);
console.log("This is a boolean:", boo1);
console.log("Boolean inside of an object:", boo2);

//Objects
const personName = {name: 'John'};
const personNameTwo = new Object({name: 'John'});
//Both are the same
console.log(typeof personName)
console.log(typeof personNameTwo)

//Array
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);
console.log(arr1)
console.log(arr2)