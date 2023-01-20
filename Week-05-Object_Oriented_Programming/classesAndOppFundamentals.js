//Classes
class Student {
    constructor(firstName,lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }
    introduce(){
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let studentOne = new Student('Tom', 'Miller', '702-888-8888', 'A');
let studentTwo = new Student('Kate', 'Taylor', '702-332-6789', 'B');

studentOne.introduce();
studentTwo.introduce();

//Inheritance

class School{
    constructor(name,size,minGrade,maxGrade, city){
        this.name = name;
        this.size = size;
        this.minGrade = minGrade;
        this.maxGrade = maxGrade;
        this.city = city
    }

    compareSize(other, size){
        if(this.size < size){
            console.log("That school is bigger.");
        }else {
            console.log("That school is smaller");
        }
    }
}

let testSchool = new School('Special School', 456, 'K', 12, 'Miami' )
console.log(testSchool)

testSchool.compareSize('Other School', 1112)

class PublicSchool extends School{
    constructor(name,size,minGrade,maxGrade, city, charter, magnet){
        super(name,size,minGrade,maxGrade,city);
        this.charter = charter;
        this.magnet = magnet;
    }
}

//Testing
let testSchoolTwo = new PublicSchool("Cool School", 678, 9, 12, 'Houston', true, false);

console.log(testSchoolTwo);

// class PrivateSchool extends School{
//     constructor(name,size,minGrade,maxGrade,city,tuition,boarding,religious){
//         super(name,size,minGrade,maxGrade,city);
//         this.tuition = tuition;
//         this.boarding = boarding;
//         this.religious = religious;
//     }
//     compareSize(otherSchool, size){
//         if(this.size < size){
//             console.log('That school is bigger.')
//         }else {
//             console.log('That school is smaller')
//         }
//     }
// }

class PrivateSchool extends School{
    constructor(name,size,minGrade,maxGrade,city,tuition,boarding,religious){
        super(name,size,minGrade,maxGrade,city);
        this.tuition = tuition;
        this.boarding = boarding;
        this.religious = religious;
    }
    calcRealTuitionFromIncome(income){
        var realTuition = null;
        if(income > 250000){
            return this.tuition;
        }else if(income <= 250000 && income > 150000){
            return this.tuition * 0.7;
        }else if(income <= 150000){
            return this.tuition * 0.3;
        }else{
            return realTuition;
        }
    }
}

var testSchoolThree = new PrivateSchool('Hip School', 123,9,12,'Austin', 12332, false, false);
console.log(testSchoolThree)

testSchoolThree.calcRealTuitionFromIncome('Other School',13000);


var schoolNames = [
    'Deer Valley',
    'Laguna Bay',
    'Oak Park',
    'Spring Garden',
    'Littlewood',
    'Hawking',
    'Greenfield',
    'Bear River',
    'Elk Creek',
    'Golden Oak',
    'Summit Technical',
    'Maple Hills',
    'Elk Creek',
    'Oak Hills',
    'Pinewood',
    'Summerfield',
    'Mountainridge',
    'Waterford'
];

var schoolObjects = [];

for(let i = 0; i < schoolNames.length; i++){
    let schoolName = schoolNames[i];
    let min = 'K';
    let max = randomIntFromInterval(4,12);
    let s = randomIntFromInterval(200,100);
    let c = 'Pleasantville';

    var newObj = new School(schoolName, s, min, max)
    schoolObjects.push(newObj)
}

console.log(schoolObjects)

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}