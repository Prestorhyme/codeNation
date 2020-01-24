
//when making a class, always use constructor. it initializes any values youn have in your class
//C just reminds us that we are working with a class. not a requirment 
// class personC 
// {
//     constructor(name, age)
//     {
//         this.personName = name;
//         this.personAge = age;
//     } 

//     about()
//     {
//         return`${this.personName} is ${this.personAge} years old`;
//     }
// }

// class employee extends personC
// {
//     constructor(name, age, id)
//     {
//         super(name, age);
//         this.employeeId = id;
//     }
// }

// let bob = new personC("Bob Marley", 74);
// let michael = new employee("Michael Jackson", 65, 556677);

// console.log( bob.personName, bob.personAge );
// console.log( bob.about() )

// console.log(michael.employeeId);

//P just reminds us that this is a prototype
// let PersonP = function(name, age)
// {
//     this.personName = name;
//     this.personAge = age;
// }

// PersonP.prototype.about = function()
// {
//     return`${this.personName} is ${this.personAge} years old`;
// }

// let fred = new PersonP("Fred Mercury", 84);

// let EmployeeP = function(name, age, id)
// {
//     PersonP.call(this, name, age);
//     this.employeeId = id;
// } 

//this connects the sub prototype to the main prototype. like the about in a class
// EmployeeP.prototype=Object.create(EmployeeP.prototype);

// let jim = new EmployeeP("Jim Morrison", 76, 879901);

// console.log(`${jim.personName} employee ID is ${jim.employeeId}`);
// console.log(jim.about);

// console.log(fred.personName, fred.personAge)
// console.log( fred.about() );








// let Animal = function (name, hunger, thirst)
// {
//     this.name = name;
//     this.hunger = hunger;
//     this.thirst = thirst;
// }

// Animal.prototype.getDetails = function()
// {
//     return `Name: ${this.name} / Hunger: ${this.hunger}`
// }

// let jo = new Animal("Jo", 100);
// console.log(jo.getDetails());

// let Animal1 = function(name, hunger, thirst)
// {
//     Animal.call(this, name, hunger);
//     this.thirst = thirst;
// };

// Animal1.prototype=Object.create(Animal.prototype);

// Animal1.prototype.animalInfo = function()
// {
//     return `${this.name} -> ${this.hunger} -> ${this.thirst}`
// }

// let francis = new Animal1("Francis", 100, 100); 

// let eat = function()
// {
//     this._hunger += 5;
// }



// console.log(francis.getDetails());
// console.log(francis.animalInfo());



// let Pet = function(name)
// {
//     this.name = name;
//     this.hunger = 100;
//     this.thirst = 100;
// }

// Pet.prototype.getDetails = function()
// {
//     return `Name: ${this.name}/ Hunger: ${this.hunger}/ Thirst:${this.thirst}`
// }

// let dog = new Pet("Maddy", 100, 100);

// Pet.prototype.getDetails = function()
// {
//     return `Name: ${this.name}/ Hunger: ${this.hunger}/ Thirst:${this.thirst}`
// }

// let cat = new Pet("Chazz", 100, 100);

// const dog = new Pet("Maddy"); 



  
//turn normal numbers into roman numerals 
// function romanize(num) {
//     let lookup = {M:1000,CM:900,D:500,CD:400,C:100,
//                   XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = " ",i;
//     for ( i in lookup ) {
//       while ( num >= lookup[i] ) {
//         roman += i;
//         num -= lookup[i];
//       }
//     }
//     return roman;
//   }

//   console.log(romanize(2500))

//global scope is everything that is outside of the function

// let animal = "fox"; 

// const catchTheAnimal = function()
// {
//     console.log(`The quick brown ${animal} jumps over the lazy dog`);

//     function feedAnimal()
//     {
//         let food = "rabbits";
//         console.log(`${animal} likes to eat ${food} and ${food2}`)
//     }

//     let food2 = "hedgehogs";

//     feedAnimal();
    
// }

// catchTheAnimal();

// function startlet()
// {
//     for (let i = 0; i < 3; i++)
//     {
//         console.log(i);
//     }
// }

//below is what java is doing with the above formula
//let i = 0;
//0 < 3 = true;
//console.log(0) = 0
//i++ -> 1

//1 < 3 = TRUE
//console.log(1) = 1
//i++ -> 2

//2 < 3 = TRUE
//console.log(2) = 2
//i++ -> 3

//3 < 3 = FALSE

// startlet();


// function startlet()
// {
//     for (var i = 0; i < 3; i++)
//     {
//         if(true)
//         {
//             var colour = "red";
//             console.log(i, colour);
//         }
    
//     }

//     console.log(i, colour);
// }

//let i = 0;
//0 < 3
//console.log( 0 , red)
//i ++  0 -> 1

//1 < 3 True
//consol.log(1, red)
//i++ 1 -> 2

//2 < 3 True
//console.log(2, red)
//i++ 2 -> 3

//3 < 3 FALSE

// startlet();


// let animal = "fox"; 

// const feedAnimal = function()
// {
//     let animal = "Lion";
//     console.log(`The ${animal} is jumping`);
// }

// feedAnimal();

// console.log(animal);


// let greetingcv  = ("Hello Code Nation")
//     console.log(greeting);
// let add = (greeting) =>
// {
//     let greeting = ("hello")
//     return 2 + 3;
// }

// const speak = function()
// {
//     console.log(`${greeting}`);
// }

// add();



// speak();

// let add = () => 
// {
//     console.log(greeting);
// }

// add();

// add

// const greeting = ("hello")
// {

// }


// let name = 'Conor';

// function getName(name) {
//     console.log("My name is " + name);


// for ( i = 0; i < 5; i++ )
// {
//     consolelog(Math.random() * 5 + 1);
// }

// }

// getName();

//------------------------------------------------------------------

// let name = ("Conor") => 
// {
//     console.log(`hi, ${name}`);
// }

// let greet = () =>
// {
//     if()
// }