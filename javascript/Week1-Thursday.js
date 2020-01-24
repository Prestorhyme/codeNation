// let weatherToday = "Cloudy";
// weatherToday = 7;

// const hoursInDay = 24;

// // Hours in a day
// hoursInDay = 12;

// console.log(weatherToday); 
// console.log(hoursInDay);let 

let a = 5;
let b = 3;

let rersult = a + b;

let result = 4 + 2; 
let result2 = 4 + 2 + 2; 

console.log( result );






// function greeting(week)
//{
//     console.log("Hellow World" + week);
// }

// greeting("Thursday", "Cloudy");


// const area = function(width, length)
// {
//     console.log("we calaculated the area")
//     return width * length
  
// }

// let result = area(5, 8);
// console.log(result);

// const area = (width, length) =>
// {
//     return width*length;
// }

// let result = area(3, 7);

// console.log(result);

// let musicList = ["Donovan", "Elvis", "Abba", "U2"]; 
// //Index positions   0           1       2

// // musicList.push("Britney Spears");

// // musicList.pop();

// let newMusicList = musicList.slice(0, 3);

// console.log(newMusicList);
// console.log(musicList);

//LOOPS--------------------------------------------------------

                //sets how 
                //many times 
                //code will 
                //run
// for (let i = 0; i < 5; i ++)
// {
//     console.log("I'm not going to be late to class again");
// }

                 //will increase
                 //by 6
                 //bc it counts 5
                
// for (let i = 0; i <= 5; i ++)
// {
//     console.log("I'm not going to be late to class again");
// }


// for (let i = 0; i < 5; i ++)
// {
//     console.log(`my current value of i is ${i}`);
// }


//challenge to link a for loop to an array//my attempt
// let fire = ["bullets", "lasers", "plasma"]

// for (let fireIndex = 0; fireIndex < 3; fireIndex ++)
// {
//     console.log(fire[fireIndex]);
// }

//Telmo's way
// let fire = ["bullets", "lasers", "plasma"]

// let arrayLen = fire.length;

// for (index = 0; index < arrayLen; index+=2)
// {
//     console.log(fire[index]); 
// }

//while loop---------

// let balance = 200;

// let game = 50;


// while(balance > 0) 
// console.log("I'm going to buy some shit");
// {
//     if (balance >= 50)
//     {
//         console.log("I got new shit!")
//         balance = balance - 50;
//     }

//     else
//     {
//         console.log("Fuck, I'm poor... my balance is " + balance);
//         break;
//     }
// }


// do
// {
//     console.log("I'm gonna buy a game"); 
// }

// while(balance > Max)
// {

// }



// let movies = ["Troy", "Last Samurai", "Ghostbusters", "Black Hawk Down"]
// let moviesSize = movies.length; 

// for (let i = 0; i < moviesSize; i ++)
// {
//     console.log(movies[i]);
// }

// const filmCheck = (index) =>
// {
//     if (movies[2] === "Ghostbusters")
//     {
//         console.log("it is Ghostbusters")
//     }

//     else 
//     {
//         console.log("No it isn't")
//     }
// }

// filmCheck();

// Telmo's method

// let myFilms1 = ["Matrix", "Lord of the Rings", "Gladiator", "Ghostbusters"]; 
// let myFilms2 = ["Equilibrium", "Terminator", "Ghostbusters", "Godfather"];

// // for (let i = 0; i < myFilms.length; i++)
// // {
// //     console.log(" myFilms[i] ");
// // }

// function filmCheck(array)
// {
//     if( array[2] == "Ghostbusters")
//     {
//         console.log("Yaayyy it's Ghostbusters!");
//     } 
    
//     else
//     {
//         console.log("Booo, we want Ghostbusters!");
//     }
// }

// filmCheck(myFilms1);

//Objects---------------------------------------------------------------
//Telmo's intro to using object's
// let employee = 
// {
//     name: "Cristiano Ronaldo",
//     company: "Manchester United", 
//     yearsWorking: 12, 
//     salary: 250,  
//     play: function()
//     {
//         console.log(`${this.name} is the best striker on ther PL`);
//     },
//     checkSalary()
//     {
//         console.log(`${this.name} is earning ${this.salary}k a week`);
//     }
// }
// employee.play();
// employee.checkSalary();

// let movie = 
// {
//     name: "Terminator", 
//     mainActor: "Aronold",
//     actors: ["Michael Bain", "Linda Hamilton"],
//     yearReleased: 1983,
//     revenue: 440,
// }

// movie.mainActor = "Schawreseneger";
// movie.rating = 5;
// console.log(movie); 

// // console.log(movie.mainActor);
// // console.log( movie["mainActor"]);
// // console.log(employee.name);
// console.log(movie["actors"][1]);

// calling a function WITHIN an object
// let person =
// {
//     name: "Conor", 
//     age: 25, 
//     sayHi: function(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// person.sayHi();

// let day = "Monday";

// let alarm = "";

// let alarmObj = 
// {
//     weekdayAlarm: "Get up at 7am",
//     weekendAlarm: "no alarm needed", 
// }

// if (day == "Saturday" || day == "Sunday") 
// {
//     console.log("The day is " + day + " " + alarmObj.weekendAlarm)
// }

// else
// {
//     console.log(alarmObj.weekdayAlarm)
// }


// let pet = 
// {
//     name: "Maddy",

//     typeOfPet: "dog",

//     age: 11,

//     colour: "spotted", 

//     play: function()
//     {
//         console.log(`${pet.name} is drinking`)
//     },

//     eating()
//     {
//         console.log(`${pet.name} is eating`)
//     }
// }

// pet.play();
// pet.eating();

// let coffeeShop = 
// {
//     branch: "Costa",

//     drink1: ["Coffee", 3],

//     drink2: ["tea", 2],

//     food1: ["sandwhich", 2],

//     food2: ["biscuits", 1],

//     drinkOrdered: function()
//     {
//         let total1 = (this.drink1[1] + this.drink2[1])
//         console.log(`Your drink's order is ${this.drink1[0]} and ${this.drink2[0]} and the total order is £${total1}`)
//     },
//     foodOrdered()
//     {
//         let total1 = (this.food1[1] + this.food2[1])
//         console.log(`Your food order is ${this.food1[0]} and ${this.food2[0]} and the total order is £${total1}`)
//     }

// }

// coffeeShop.drinkOrdered();
// coffeeShop.foodOrdered();
