//Object.prototype
//Person.prototype

//Person constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getFullYear() - 1984);
    // }
};

//Calculate Age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get Full Name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const kim = new Person('Kim', 'Miller', '8-12-90')
const mary = new Person('Mary', 'Jonas', 'March 20, 1978')
console.log(mary)
console.log(kim.calculateAge())
console.log(mary.getFullName())