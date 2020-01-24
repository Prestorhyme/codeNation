//this method is common js
const Person = require ('./Person');

//this is an object
const person1 = new Person('William', 25);
const person2 = new Person('Bob', 50);

person1.greeting();
person2.greeting();