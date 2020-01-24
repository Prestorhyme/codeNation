const button = document.getElementById("roll");

const number = document.getElementById("number");

let listItem = document.getElementsByTagName("ul")[0];

let randomNumber = 0;

let currentNumber = 0;

function reset()
{
    currentNumber = 0;
    number.innerHTML = (randomNumber);
    window.location.reload(true);
}

document.getElementById("number").value = 0;
//initialise the first value of the input as zero. on it's own it is nothing. Must be set to something. 


button.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("number").value = parseInt(document.getElementById("number").value) + randomNumber;
                                            //parseInt because the value from the input comes as a string. ParseInt turns it into an integer.  
    alert(`your number is ${randomNumber}`);
    
    if (randomNumber == 1)
    {
        alert(`Yay, You got the lucky number! You lose!`);
        reset();
    } else
    {
        currentNumber += randomNumber;
    }

    if( currentNumber >= 20)
    {
        alert(`You have won!`)
        reset();
    }

});

// function game()
// {
//     if (totalNumber >= 20)
//     {
//         alert("You have WON!");
//     }

//     else if (randomNumber == 1)
//     {

//         alert("Uh-Oh! You got the lucky number! You lose!")
//     }

//     else if (randomNumber > 1)
//     {
//         currentNumber += randomNumber;
        
//     }
// }

// game();

