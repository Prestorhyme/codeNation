// const person = {
//     name: 'William',
//     age: 25
// }

// module.exports = person;

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 
    
    //this is a method
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }

}

module.exports = Person;