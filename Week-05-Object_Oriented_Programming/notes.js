// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Student extends Person {
//     constructor(name,age,gpa){
//         super(name,age);
//         this.gpa = gpa;
//     }
// }

// class Teacher extends Person{
//     constructor(name,age, classSize){
//         super(name,age);
//         this.classSize = classSize;
//     }
// }

// let student1 = new Student("Tony", 22, "3.0");
// console.log(student1);

//Class Declaration

class Animal{
    //Blueprint in creating objects
    constructor(name,type,weight,height,location){
        //Properties
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.height = height;
        this.location = location;
        //Everything within the Animal class is called instances
    }
    //This is the method or functionality
    describe(){
        console.log("Animal Describe");
        console.log("----------------");
        console.log("\Name: " + this.name);
        console.log("\tType: " + this.type);
        console.log("\tWeight " + this.weight + "lb");
        console.log("tHeight: " + this.height + " in.");
        console.log("\tLocation: " + this.location);
    }
};

let elephant = new Animal("Dumbo", 'elephant', 8000, 108, 'Disneyland');
console.log(elephant)
elephant.describe()