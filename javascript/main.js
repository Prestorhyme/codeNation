console.log("Hello from my javascript file main.js");

console.log("testing");

// let favouriteFood = prompt("Do you prefer pizza or icecreams");

let activity = prompt("Do you want to your play or eat");

let result = activity.toLowerCase();

// console.log( favouriteFood );

if(result == "play")
{
    alert("Yayyy your pet is playing");
} else if(result == "eat")
{
    alert("Your pet is well fed");
} else
{
    alert("please make sure to select play or eat");
}




