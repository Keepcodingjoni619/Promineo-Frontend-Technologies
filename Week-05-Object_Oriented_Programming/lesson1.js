/* 
Object-Oriented Programming

DVD Player
---------------
height
width
weight
color

play
Fast Forward
Rewind
Pause

DVD
---------

Movie Length
Image
Size

Classes are the mechanism by which we structure our code in OOP.

A Class is a blueprint, in which you create your properties and functionality.
An Object is the actual product developed from the blueprint.
An Object is an instance of a Class!

So, a class is a template for objects, and an object is an instance of a class. 
When we create an object from a class, that object will inherit everything in the class, including the properties and functionality.

4 Key of Object-oriented Programming
-Encapsulation
-Abstraction
-Inheritance
-Polymorphism

*/

//Person constructor
// function Person(name,dob){
//     //Assign name to name
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     // this.car = car;
// }

// const person = new Person('Johnnie',33);
// const personTwo = new Person('Kristine',30)
// console.log(person)
// console.log(personTwo)

// const dateOfBirth = new Person('Johnnie', '10-10-1989');
// console.log(dateOfBirth.calculateAge())

//Callback function

// function makeEmailObject(authorParams, messageParams){
//     return {
//         id: 1,
//         author: authorParams,
//         message: messageParams
//     }
// };

// let message = makeEmailObject('Maxwell', ' Thank You for buying my book');
// console.log(message)

class Email {
    constructor(authorParams, messageParams){
        this.id = 12;
        this.author = authorParams;
        this.message = messageParams;
    }
    markRead(){
        this.read = true;
    }
};

//To Access the constructor
let emailFromSue = new Email('Sue', 'sue@aol.com')
console.log(emailFromSue)

//Constructing
/* Same as the class Email  Above */ 
// {
//     id: 1,
//     author: authorParams,
//     message: messageParams
// }

class Movies {
    constructor(name, year, genre){
        this.title = name;
        this.yearRelease = year;
        this.movieCategory = genre;
    }
    playMovie()
    {
        this.play = false;
    }
}

let movieOne = new Movies('Titanic', 1992, 'Drama');
console.log(movieOne)

/*
Reason we use classes is so we can reuse objects without having to write more object but instead 

*/ 