// let name = "Bob the Destroyer";

// let age = "75";

// let colour = "green";

// function profile(){
// console.log("My name is " + name + 
// ". My age is " + age +
// ". My favourite colour is " 
// + colour);
// };

// profile();  

// let breakfast = "souls of the slain"; 

// let lunch = "blood of my enemies"; 

// let dinner = "ice cream sunday"; 

// function food(){
//     console.log("My breakfast was " + breakfast 
//     + " and then for lunch I had " 
//     + lunch 
//     +  " and finally for dinner I had " + dinner);
// }

// food();

// breakfast = "eggs";

// lunch = "Ham and cheese toastie"

// dinner = "brains"

// food();



// var date1 = new Date (22-10-2019);

// var date2 = new Date (25-04-2020);

// var Difference_In_Time = date2.getTime() - date1.getTime(); 

// // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

// // document.write("Total number of days between dates "
// //     + date1 + " and "

// //     +date2 + "is: <br>" 

// //     +Difference_In_Days);



// let one_day = 1000 * 60 * 60 * 24; 

// let present_date = new Date(); 

// let birth_day = new Date(2020, 03, 25) 

// let Result = birth_day.getTime() - present_date.getTime()

// let numberOfDays = Result / (1000 * 60 * 60 *24);  

// console.log(numberOfDays); 




// let marker1 = ("X")
// let marker2 = ("O")


// console.log("  |      |  ")
// console.log(marker1 + " | "+ marker2 +"    |  ")
// console.log("  |      |  " )
// console.log(" ---------- ")
// console.log("  |      |  ") 
// console.log(marker1 + " |      |  " + marker2)
// console.log("  |      |  ")
// console.log(" ---------- ")
// console.log("  |      |  ")
// console.log(marker2 + " |      |  ")
// console.log("  |      |  ")

// //
// let password = "qaaaafssssss";

// let passLength = password.length;

// if( passLength > 10){
//     console.log("Password is strong")
// } else if( passLength > 5){
//     console.log("Password is too short")
// } else{
//     console.log("Your password is shit, mate")
// }





// let num = 15

// if( num\3 ) && (num )



/*
let grade = 80; 

switch(true) {
    case grade >= 90: 
        console.log("You have an excellent test"); 
        break;
    case grade >= 80:
        console.log("You have a great test")
        break; 
    default: 
        console.log("Your grade is not good enough"); 
}
*/ 

/*
let age = 122; 
let place = "UK"; 

if(age > 17 && place == "UK") {
    console.log("I can serve you")
} else{
    console.log("I can't serve you.")
}*/ 

/*
let num = 7; 

if (num % 3 == 0||num % 5 == 0) {
    console.log("this number is divisible by 3 or 5")
} else{
    console.log("This number is NOT divisble by 3 or 5")
}
*/

/*
let num = 10; 

switch(true){
    case num % 3 === 0 && num % 5 === 0:
        console.log("This is divisble by 3 AND five")
        break;
    case num % 3 === 0:
        console.log("This is divisble by three");
        break;
    case num % 5 === 0: 
        console.log("This number is Divisible by 5");
        break;
   default: 
        console.log("This number is NOT divisible by 3 or 5");

}*/
/*
let num = 15;

switch (true){
    case num % 3 ===0 && num % 5 ===0:
        console.log("Fizz Buzz");
        break;

    case num % 3 === 0:
        console.log("Fizz")
        break;
    case num % 5 === 0:
        console.log("Buzz");
        break; 
    default:
        console.log(num)       
}
*/

/*
let num = ("12321");

let arrayNum = num.split("");
    console.log(arrayNum)

let revArray = arrayNum.reverse("");
    console.log(revArray)

let Palindrome = revArray.join("");    


if (Palindrome == num) {
   console.log("This number is a palendrone")
}else {
   console.log("This number is not a palindrone")
}
*/

/*
let time = 6;

let placeOfWork = "Code Nation";

let townOfHome = "Middleton";

let iAmCommuting = "Bus"

if(time < 7){
    console.log("I am working at " + placeOfWork)
}else if(time == 7){
    console.log("I am on the " + iAmCommuting)
}else if(time >8){
    console.log("I am back in " + townOfHome)
}
*/

/*
const str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
const vowelRe = /[aeiou]/;

const countVowels = str.split('').reduce((acc, c) => {

  // Test if the current letter is a vowel
  const found = vowelRe.test(c);
 
  // If it is: if the vowel exists in the object as a key increase the count,
  // and if it doesn't set it to zero, and then increase the count
  if (found) acc[c] = (acc[c] || 0) + 1;

  // return the accumulator
  return acc;
}, {});

console.log(countVowels);
*/

//                   //parameteres
// function foodShopping(food, number, shop) 
// {
//     console.log("Today I am going to buy " + number + " " + food + " at " + " " + shop);
// }
//             //arguments
// foodShopping("oranges", 4, "Asda"); 



// function greeting()
// {
//     return "hello world"; 
// }

// let myGreeting = greeting(); 

// console.log(myGreeting)



// const basket1 = function(number1, number2)
// {
//     return number1 + number2; 
// }

// const basket2 = function(number1, number2, number3)
// {
//     return number1 + number2 + number3;
// }

// let totalShopping = basket1(2, 4) + basket2(1, 1, 2);

// console.log(totalShopping); 

// const basket1 = (fruit) => 
// {
//     console.log("I have in my basket some " + fruit);
// }

// basket1("pears"); 


// let orderCount = 0;

// const takeOrder = (topping1, topping2, topping3) =>
// {
//     orderCount++ 
//     return console.log("pizza with " + topping1 + " and " + topping2 + " and " + topping3 + " your " + orderCount);
    
// }

// let myOrder = takeOrder("Pineapple", "cheese", "tomatoes");


// let pin = 123456;          

// let accountBalance = 300;

// function withdrawAmount(money, pin)
// {

//     if (pin == 123456 && accountBalance >= money)
//     {
//         accountBalance = accountBalance - money; 
//         console.log("your pin is correct. Your account balance is " + accountBalance);
//     }   
//     else if(pin !== 123456)
//     {
//         console.log("Your pin is incorrect")
//     }
//     else if(pin == 123456 && accountBalance < money)
//     {
//         console.log("I'm sorry, but you don't have enough")
//     }
        
// }

// withdrawAmount(10, 123456);




/*
let num = 7; 

if (num % 3 == 0||num % 5 == 0) {
    console.log("this number is divisible by 3 or 5")
} else{
    console.log("This number is NOT divisble by 3 or 5")
}
*/


/*
let shoppingList = ["bread", "milk", "oranges", "pears"];
        //position:     0       1       2

console.log( shoppingList );

shoppingList.push("KitKat");

console.log( shoppingList );

shoppingList.pop();
shoppingList.pop();
console.log( shoppingList )
*/

// let snackList = ["Crisps", "Chocolate", "Brownies"];

// let fruitList = ["Apples", "Bananas", "Strawberries"]

// let drinkList = ["Wine", "beer", "cider"];

// let finalList = [...snackList, ...fruitList, ...drinkList]
// console.log(finalList);

//snacks fruits drinks

/*
let webList = ["Google", "Discord", "Amazon"]

console.log( webList ); 

webList.push("Facebook", "Youtube");

console.log( webList )

webList.pop();
webList.pop();
console.log(webList);
*/


// let countryList = ["England", "Wales", "Scotland", "Ireland"]

// countryList.splice(2, 1, "Northern Ireland");
// console.log( countryList )


/*
let games = ["COD", "Skyrim", "Oblivion", "Dragon Age"];
games.shift();
console.log( games )
*/

/*
let games = ["COD", "Skyrim", "Oblivion", "Dragon Age"]
games.unshift("Dark Souls");
console.log( games )
*/

/*
let games = ["COD", "Skyrim", "Oblivion", "Halo"]
let xbox = games.slice( 2,3 );
console.log( xbox );
// the item that gets sliced is whatever is between the two numbers selected. So above, only Obliovion is selected because it never reaches three. 
//So 1 , 2 would only select COD as it ENDS at 2. 
*/




// console.log(Math.floor(Math.random()*10 + 1));


// console.log("all around the world".toUpperCase().charAt(4));

// let i = 17;

// i = i * 8;

// console.log(i);

// let favouriteMovie = "Star Wars";

// console.log(`my favourite movie is ${favouriteMovie}`);


//-------------------------------------------------------------------------------------

// let name = "Pip";
// let age = 25;
// let colour = "green";

// console.log(`My name is ${name}. I am ${age} and my favourite colour is ${colour}`);

// name = "Conor";
// age = 30;
// colour = "red";

// console.log(`My name is ${name}. I am ${age} and my favourite colour is ${colour}`);


//-------------------------------------------------------------------------------------

// let breakfast = "Scrambled Eggs";

// let lunch = "Ham and Cheese toasties";

// let dinner = "HUEL";

// console.log(`I had three full meals today! 
//             I had ${breakfast} for breakfast, 
//             ${lunch} for lunch, 
//             and ${dinner} for dinner!`);

// breakfast = "sausages"; 

// lunch = "cereal";

// dinner = "beans";

// console.log(`Tomorrow my menu wil will be ${breakfast} for breakfast, 
//             ${lunch} for lunch and ${dinner} for dinner`);

//-------------------------------------------------------------------------------------

//let one_day = 1000 * 60 * 60 * 24; //the number of hours, 
                                   //minutes, seconds and 
                                   //milerseconds in a day
                                   //optional

// let present_date = new Date(2019, 10, 29); //sets the current date

// let birth_day = new Date(2020, 04, 25) //year, month then day

// let Result = birth_day.getTime() - present_date.getTime()

// let numberOfDays = Result / (1000 * 60 * 60 *24);  

// console.log(numberOfDays); 

//-------------------------------------------------------------------------------------

// let age = 18; 
// let place = "UK"; 

// if(age > 17 && place == "UK") {
//     console.log("I can serve you")
// } else{
//     console.log("I need to see your ID.")
// }
//-------------------------------------------------------------------------------------

// let game = "Pajama Sam";

// if (game == "halo")
// {
//     console.log("I get to play Halo")
// } 

// else if(game == "Oblivion")
// {
//     console.log("I get to play Oblivion")
// }

// else {
//     console.log("I'll play something else")
// }

//-------------------------------------------------------------------------------------

// let game = "Super Smash Bros"

// switch(game){
//     case "God of War":
//     case "Gears of War":
//         console.log("You're playing on your PS4");
//         break;
//     case "World of Warcraft":
//     case "Total War: Warhammer":
//         console.log("You are playing on your PC");
//         break;
//     case "Halo":
//     case "Fable":
//         console.log("You are playing on your Xbox");
//         break;
//     case "Mario Kart":
//     case "Super Smash Bros":
//         console.log("You are playing on your Wii");
//         break;
//     default:
//         console.log("Why aren't you playing videogames? You sick??")
// }
//-------------------------------------------------------------------------------------

//Just another way of writing into the console.log

// let topping = "sausage"

// switch(topping)
// {
//     case "sausage":
//         console.log(`I want ${topping} on my pizza`);
// }
//-------------------------------------------------------------------------------------

// let password = "acwellan";
// let passLength = password.length

// if (passLength >= 8)
// {
//     console.log("Your password is good");
// } else if(passLength < 8) 
// {
//     console.log("Your password is not strong enough");
// } 
//-------------------------------------------------------------------------------------

//if
// let num = 15

// if( num % 3 == 0 && num % 5 == 0)
// {
//     console.log(`${num} is divisible by 3 and 5`)
// }

// else if( num % 3 == 0 || num % 5 == 0)
// {
//     console.log(`${num} is divisible by 3 or 5`)
// } else{
//     console.log(`${num} is NOT divisble by 3 or 5`)
// }

//switch
// let num = 8;

// switch(true)
// {
//     case num % 3 == 0 && num % 5 == 0:
//         console.log(`${num} is divisible by 3 and 5`)
//         break;
//     case num % 3 == 0:
//         console.log(`${num} is divisble by 3`)
//         break;
//     case num % 5 == 0:
//         console.log(`${num} is divisible by 5`)
//         break;
//     case num % 3 != 0:
//     case num % 5 != 0:
//         console.log(`${num} is not divisble by 3 or 5`)
// }
//-------------------------------------------------------------------------------------

// let num = "12321";//log it as a string

// let arrayNum = num.split("");//splits the strong into individual letters,
//                              //assinging each leatter a value oin the array
//     console.log(arrayNum)

// let revArray = arrayNum.reverse("");//reversess the array, 
//                                     //like facing yourself in a mirror
//     console.log(revArray)
// //  Palindrome is it's own function is Javascript
// let Palindrome = revArray.join("");//places the string back together    


// if (Palindrome == num) {
//    console.log("This number is a palendrone")
// }else {
//    console.log("This number is not a palindrone")
// }
//-------------------------------------------------------------------------------------

// let time  = 1900;

// let work = "SG";

// let home = "home";

// if (time >= 1900)
// {
//     console.log(`I am at home`)
// }

// else if(time < 1800)
// {
//     console.log(`I am still coding at ${work}`)
// }

// else if(time == 1800)
// {
//     console.log(`I am going back ${home}`)
// }
//-------------------------------------------------------------------------------------

//https://stackoverflow.com/questions/38082187/print-only-vowels-from-string-from-textbox

// let vowel = "aeiou";//states the vowels

// let label = "gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";//what you are "translating"

// let stripped = "";//what strips and checks each letter from the label

// for (i = 0; i < label.length; i++)//the equation that counts and stores each vowel
// {
//     if(vowel.indexOf(label[i]) >= 0) stripped += label[i];
// }
// console.log(stripped);

//-------------------------------------------------------------------------------------

// let string = "Conor";//the word I'm using

// let array = string.split("");//puts the word into an array 
//    console.log(array);       //then splits each letter individually

// let lastItem = array[array.length - 1];//grabs the last item(in this case letter) 
//                                        //from the array
// console.log(lastItem);

//-------------------------------------------------------------------------------------

//this function gave me the idea for my if statement

//https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript

// let num1 = 10;

// let num2 = 3;

// if (num1 + num2 == evenNumber)
// {
//     console.log(`${num1} and ${num2} are even!`)
// } else{
//     console.log(num1 * num2)
// }

//this was my solution

// let num1= 5;

// let num2 = 8;

// let value = num1 + num2;

// if (value % 2 == 0)
// {
//     console.log(`${value} is an even number`);
// } else {
//     console.log(`${value} is and odd number`);
// }

//-------------------------------------------------------------------------------------

// function coffeeOrder (size, drink)
// {
//     console.log(`Ordering a ${size} ${drink}`);
// };

// coffeeOrder("small", "coffee");
// coffeeOrder("large", "Mocha");
// coffeeOrder("extra large", "latte");
//-------------------------------------------------------------------------------------

// const factorial = (n) =>
// {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
// }
    
//     console.log(factorial(33));
//-------------------------------------------------------------------------------------

// let orderCount = 1;

// const takeOrder = (topping, crust) => 
// {
//     console.log(`Order ${orderCount} = Pizza with ${topping} and ${crust}`);
//     orderCount++;
// }

// takeOrder("pineapple", "BBQ sauce");
// takeOrder("Pepperoni", "cheese stuffed crust");
//-------------------------------------------------------------------------------------

// let balance = 110;

// let cash = 100;

// let pin = 123457;

// let newBalance = balance - cash;

// function cashMachine (cash, balance, pin)
// {
//     if ((pin == 123456) && (cash <= balance))
//     {
//         console.log(`your new balance is ${newBalance}`)
//     }

//     else if ((pin == 123456) && (cash > balance))
//     {
//         console.log(`I'm sorry, but you don't have that much!`)
//     }

//     else if ((pin != 123456) && (cash <= balance))
//     {
//         console.log("I'm sorry, please re-insert your pin")
//     }
// }

// cashMachine(cash, balance, pin);

//-------------------------------------------------------------------------------------

// function multiply (num1, num2)
// {
//     return num1 * num2;
// }

// console.log(multiply (2, 3));

//-------------------------------------------------------------------------------------
                        //0                 //1             //2
// let gamesOrder = ["Conor - Skyrim", "Gir - Star Wars", "Justin - PacMan"];

// console.log(gamesOrder);

// gamesOrder.push("Jennifer - Soul Caliber", "Tiffany - Prince of Persia");

// console.log(gamesOrder);

// gamesOrder.pop();

// console.log(gamesOrder);
//-------------------------------------------------------------------------------------

// let gamesOrder = ["Conor - Skyrim", "Gir - Star Wars", "Justin - PacMan"];

// gamesOrder.shift();

// console.log(gamesOrder);


//-------------------------------------------------------------------------------------
// let gamesOrder = ["Conor - Skyrim", "Gir - Star Wars", "Justin - PacMan"];

// gamesOrder.unshift("Jennifer-Soul Caliber");

// console.log(gamesOrder);

//-------------------------------------------------------------------------------------

// let gamesOrder = ["Conor - Skyrim", "Gir - Star Wars", "Justin - PacMan"];

// newGamesOrder = gamesOrder.slice(0, 1);

// console.log(gamesOrder);
// console.log(newGamesOrder);
//-------------------------------------------------------------------------------------

// let gamesOrder = ["Conor - Skyrim", "Gir - Star Wars", "Justin - PacMan"];

// gamesOrder.splice(2, 0, "Jennifer - Soul Caliber", "Hyunh - Prince of Persia");

// console.log(gamesOrder);
//-------------------------------------------------------------------------------------

// let orderCount = 1;

// const takeOrder = (topping, crust) => 
// {
//     console.log(`Order ${orderCount} = Pizza with ${topping} and ${crust}`);
//     orderCount++;
// }

// takeOrder("pineapple", "BBQ sauce");
// takeOrder("Pepperoni", "cheese stuffed crust");

// let orderCount = 1;

// let values = [1,2,3];
// values.unshift(4);

// function subSandwich(topping1, topping2, topping3, topping4, topping5)
// {
//     console.log(`Order ${orderCount} = 
//     subsandwich with ${topping1}, ${topping2}, ${topping3} ${topping4}, ${topping5}`);
//     orderCount++;

//     for (i = 0; i < 6; i++ )
//     {
//         console.log(Math.random() * 49 +1);
//     }

//     for (i = 9; i > -1; i--)
//     {
//         console.log(i);
//     }
// }

// subSandwich("pepperoni", "cheese", "mushrooms", "Ham", "bacon");
//-------------------------------------------------------------------------------------

//loop formula
//for (i = 0; i < 6; i++)

// i stands for index

// let favouriteGames = ["Star Wars", "Skyrim", "Oblivion", "Fable", "Total War"];

// for (let gamesIndex=0; gamesIndex<favouriteGames.length; gamesIndex++)
// {
//     console.log(favouriteGames[gamesIndex]);
// }
//-------------------------------------------------------------------------------------

// let xboxGames = ["Lord of the Rings", "Star Wars", "Oblivion", "Skyrim", "Fable"];

// xboxGames.push("Call of Duty", "Assassins Creed");

// for (let xboxGamesIndex = 0; xboxGamesIndex < xboxGames.length; xboxGamesIndex++);

// console.log(xboxGames);
//-------------------------------------------------------------------------------------

// let xboxGames = ["Lord of the Rings", "Star Wars", "Oblivion", "Skyrim", "Fable"];

// xboxGames.push("Call of Duty", "Assassins Creed");

// let currentXboxGame = "Assassins Creed";

// while(currentXboxGame != "Star Wars")//this will randomly list what is in the array 
//                                      //and won't stop until it hits Star Wars
// {
//     currentXboxGame = xboxGames[Math.floor(Math.random()*7)];
//     console.log(currentXboxGame);
    
// }

//-------------------------------------------------------------------------------------

// let films = ["Troy", "Last Samurai", "Saving private Ryan", "Riddick", "Ghostbusters"];

// for (let filmsIndex = 0; filmsIndex < films.length; filmsIndex++)
// {
//     console.log(films);
// }

// function filmCheck()
// {
//     if ( films[4] == "Ghostbusters" )
//     {
//         console.log("yay");
//     } 
    
//     else if (films[4] != "Ghostbusters")
//     {
//         console.log("boo");
//     }
// }

// filmCheck([2]);

//-------------------------------------------------------------------------------------

// let weekendAlarm = "No alarm needed";   

// let weekdayAlarm = "Wake up at 7am";

// let day = "Saturday";

// function alarm(weekendAlarm, weekdayAlarm, day) 
// {
//     if (day == "Saturday" || day == "Sunday")
//     {
//         console.log(weekendAlarm);
//     }
    
//     else if (day != "Saturday" || day != "Sunday")
//     {
//         console.log(weekdayAlarm);
//     }
// }



// alarm(weekendAlarm, weekdayAlarm, day);

//-------------------------------------------------------------------------------------

// name = "Conor"

// age = 25

// function person()
// {
//     music = ["Classical", "Rock" , "acoustic"]
//     console.log(music[1]);
//     sayHi = "hello world";
//     console.log(`${sayHi}! my name is ${name} and I am ${age} years old!`)
// }

// person();

//-------------------------------------------------------------------------------------

//still iffy on this

// const person = 
// {
//     name: "Conor",
//     age: 25, 
//     music: ["rock", "classical", "acoustic"],

//         openPerson()
//         {
//             if(this.name)
//             {
//                 return `my name is ${name}`;
//             }
//         },

//         closePerson()
//         {
//             return "goodbye";
//         }
        
// };
//-------------------------------------------------------------------------------------

//getting there

// const pet = 
// {
//     name: "Maddy",

//     typeOfPet: "dog",

//     age: 12,

//     colour: "spotted",

//     eat: "eating",

//     drink: "drinking",

//         openPet()
//         {
//             if (this.drink)
//             {
//                 return `${this.name} is ${this.drink}`;
//             }
//         },
//     closePet()
//     {
//         return `${this.name} is done ${this.drink}`;
//     }
// };

// console.log(pet.openPet());
// console.log(pet.closePet());
//-------------------------------------------------------------------------------------


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
//         console.log(`Your drink's order is ${this.drink1[0]} and ${this.drink2[0]} 
//                      and the total order is £${total1}`)
//     },
//     foodOrdered()
//     {
//         let total1 = (this.food1[1] + this.food2[1])
//         console.log(`Your food order is ${this.food1[0]} and ${this.food2[0]} 
//                      and the total order is £${total1}`)
//     }

// }

// coffeeShop.drinkOrdered();
// coffeeShop.foodOrdered();
//-------------------------------------------------------------------------------------

// let string = ("Monopoly");

// let stringNum = string.split("");
//     console.log(stringNum)

// let revString = stringNum.reverse("");
//     console.log(revString)


// function string()
// {
//     let string = ("Monopoly");

//     let stringNum = string.split("");
//         console.log(stringNum)

//     let revString = stringNum.reverse("");
//         console.log(revString)

//     let unRevString = stringNum.join("");
//         console.log(unRevString)
// };

// string();


// function reverse(string)
// {
//     return string.split("").reverse("").join("");
// }
//     console.log(reverse("monopoly"));