//THURSDAY REFRESH!!---------


//LOOPS
// for ( let i=0; i < 5; i++)
// {
//     console.log("Hellow World")
// }

// let balance = 200;

// let trainersPrice = 50;

// while( balance >= 50)
// {
//     console.log("I can buy more shoes");
//     balance = balance-trainersPrice;
// }

//OBJECTS
// let person = {
//     name: "Conor",

//     age: 25, 

//     jump: function(){
//         console.log(`${this.name} knows how to jump, because he is only ${this.age} years old`);
//     },
//     sprint() {
//         console.log("This person knows how to sprint");
//     },
//     wine: {
//         "porto": {
//             price: 12,
//             region: "portugal",
//         },
//         buckfast: {
//             price: 18,
//             region: `England`,
//         }
//     },
//     drinks: ["proseco", "bacardi", "rose"]
// }


// //console.log( person.wine.porto.region);
// //console.log( person["wine"] ["porto"] ["region"]);
// console.log(person.drinks[0]);

//FRIDAY  BEGINS--------------------------------------------------------------
//CLASSES

// let person1 = {
//     name: "Frank",

//     age: 12,

//     email: "frank@email.com",

//     phone: 123456789,
// }

// let person2 = {
//     name: "Gill",

//     age: 31,

//     email: "Gill@email.com",

//     phone: 987654321,
// }

// let person3 = {
//     name: "Bob",

//     age: 96,

//     email: "bob@email.com",

//     phone: 1325476879,
// }

//^writing code this long is impractical. Hence, classes some into play

// class Player
// {
//                 //1    //2     //3 
//     constructor(name, sport, yearsExp)
//     {
//         this.playerName = name;
//         this.playerSport = sport;
//         this.playeryearsExp = yearsExp;

//     }
//     run(){
//         console.log(`${this.playerName} knows how to run`);
//     }
// }
//                                   //1         //2   //3
// const mikeTyson = new Player("Mike Tyson", "Boxing", 15);

// // console.log( mikeTyson.playerName );
// // console.log( mikeTyson.playerSport);
// // mikeTyson.run();

// const crisRonaldo = new Player("Cristiano Ronaldo", "Football", 18);

// console.log( crisRonaldo.playerName);
// console.log( crisRonaldo.playerSport);

// crisRonaldo.run();


// class Pokemon
// {
//     constructor(name, type, hp)
//     {
//         this.pokemonName = name;
//         this.pokemonType = type;
//         this.pokemonHp = hp;
//     }
//     eat()
//     {
//         console.log(`${this.pokemonName} knows how to eat`);
//     }
//     fight()
//     {
//         console.log(`${this.pokemonName} knows how to fight`);
//     }
// }

// const pikachu = new Pokemon("pikachu", "lightning", 100);

// // console.log( pikachu.pokemonName);
// // console.log( pikachu.pokemonType);
// // console.log( pikachu.pokemonHp);

// // pikachu.eat();
// // pikachu.fight();

// const bulbazor = new Pokemon("bulbazor", "water", 150);

// console.log( bulbazor.pokemonName);
// console.log( bulbazor.pokemonType);
// console.log( bulbazor.pokemonHp);


// bulbazor.eat();
// bulbazor.fight();




// class Player
// {
//                 //1    //2     //3 
//     constructor(name, sport, yearsExp)
//     {
//         this.playerName = name;
//         this.playerSport = sport;
//         this.playeryearsExp = yearsExp;

//     }
//     run()
//     {
//         console.log(`${this.playerName} knows how to run`);
//     }
// }
// //extends is like having a child of the parent class. so player is the parent class, and extender is it's child/sub-class
// class Golf extends Player {
//     constructor(name, sport, yearsExp, handicap)
//     {
//         //super grabs all this.player*** items from above
//         super(name, sport, yearsExp,);
//         this.playerHandicap = handicap;
//     }

//     playGolf()
//     {
//         console.log(`${this.playerName} knows how to play golf`);
//     }
// }

// const tigerWoods = new Golf("Tiger Woods", "Golf", 20, "Master");

// class basketBall extends Player
// {
//     constructor(name, sport, yearsExp, shirtNumber)
//     {
//         super(name, sport, yearsExp);
//         this.shirtNumber = shirtNumber;
//     }
//     slamDunk()
//     {
//         console.log(`${this.playerName} knows how to slam dunk!`);
//     }
// }

// const koby = new basketBall(`Koby Briant`, `BasketBall`, 20, 8);

// console.log( koby.playerSport );
// console.log(`the shirt number ${koby.playerName} is ${koby.shirtNumber}`);


// tigerWoods.playGolf();
// tigerWoods.run();
// tigerWoods.slamDunk();
// koby.slamDunk();
// koby.run();


