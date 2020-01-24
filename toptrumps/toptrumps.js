let playerLives = 7;

let pcLives = 7;

let deck1 =
[
    {name:"Tank", Strength: 10, Stamina: 12, Mana: 0, Villainy: -5},  
    {name:"DPS", Strength: 8, Stamina: 7, Mana: 1, Villainy: -2},
    {name:"Heal", Strength: 2, Stamina: 9, Mana: 6, Villainy: -8},
    {name:"Jack Of Trades", Strength: 5, Stamina: 5, Mana: 5, Villainy: -3},
    {name:"Paladin", Strength: 9, Stamina: 8, Mana: 4, Villainy: -10},
    {name:"Thief", Strength: 1, Stamina: 3, Mana: 0, Villainy: 5},
    {name:"Warlock", Strength: 1, Stamina: 4, Mana: 7, Villainy: 3},
    {name:"Cleric", Strength: 3, Stamina: 1, Mana: 6, Villainy: -7},
    {name:"Shaman", Strength: 2, Stamina: 0, Mana: 8, Villainy: -4},
    {name:"Warrior", Strength:12, Stamina: 6, Mana: 0, Villainy: -2},
    {name:"Necromancer", Strength: 2, Stamina: 2, Mana: 6, Villainy: 7},
    {name:"Assassin", Strength: 4, Stamina: 4, Mana: 0, Villainy: 9},
    {name:"SpellSword", Strength: 5, Stamina: 5, Mana: 4, Villainy: -3},
    {name:"Knight", Strength: 8, Stamina: 8, Mana: 0, Villainy: -5},
    {name:"Berserker", Strength: 15, Stamina: 10, Mana: -10, Villainy: 15}
]

let deck2 = 
[
    {name:"Archer", Strength: 9, Stamina: 4, Mana: 0, Villainy: -2},
    {name:"Bard", Strength: 6, Stamina: 6, Mana: 2, Villainy: -5},
    {name:"Battlemage", Strength: 7, Stamina: 7, Mana: 4, Villainy: -5},
    {name:"Pilgrim", Strength: 5, Stamina: 6, Mana: 3, Villainy: -9},
    {name:"Nightblade", Strength: 3, Stamina: 4, Mana: 0, Villainy: 2},
    {name:"Monk", Strength: 0, Stamina: 1, Mana: 5, Villainy: -10},
    {name:"Rogue", Strength: 1, Stamina: 3, Mana: 0, Villainy: 3},
    {name:"crusader", Strength: 10, Stamina: 8, Mana: 2, Villainy: -8},
    {name:"Sorcerer", Strength: 2, Stamina: 2, Mana: 6, Villainy: -1},
    {name:"Witch Hunter", Strength: 4, Stamina: 4, Mana: 3, Villainy: 3},
    {name:"Acrobat", Strength: 6, Stamina: 15, Mana: 0, Villainy: -4},
    {name:"Agent", Strength: 3, Stamina: 4, Mana: 0, Villainy: -2},
    {name:"Scout", Strength: 1, Stamina: 5, Mana: 0, Villainy: -7},
    {name:"Mage", Strength: 0, Stamina: 3, Mana: 12, Villainy: -4},
    {name:"Champion", Strength: 12, Stamina: 10, Mana: 8, Villainy: -12},

];

let playerCard = 0;

let pcCard = 0;

let randomPlayerCard;

let randomPcCard;

function currentCard()
{
     randomPlayerCard = deck1[Math.floor(Math.random() * 14) +1]

     randomPcCard = deck2[Math.floor(Math.random() * 14 + 1)]

    alert(`Your card is ${randomPlayerCard.name}! Your stats are: Strength ${randomPlayerCard.Strength}, Stamina ${randomPlayerCard.Stamina}, Mana ${randomPlayerCard.Mana}, Villainy ${randomPlayerCard.Villainy}`);

    game();
}

function game()
{

    let choose = prompt("please choose a stat: Strength, Stamina, Mana, Villainy");
    choose = choose.toLowerCase();

  if (playerLives == 0)
  {
      alert(`GAME OVER: You ran out of lives. Better luck next time!`);
  }  

  else if (pcLives == 0)
  {
      alert(`victory! The computer has run out of lives!`);
  }

  else if (choose == "strength" && randomPlayerCard.Strength < randomPcCard.Strength)
  {
      alert(`Sorry, but the Computer had a higher value. You now have ${playerLives} left.`)
      playerLives -= 1
      currentCard();
  }

  else if (choose == "strength" && randomPlayerCard.Strength > randomPcCard.Strength)
  {
      alert(`Hooray! Your value was higher! The computer now only has ${pcLives} left.`)
      pcLives -= 1
      currentCard();
  }

  else if (choose == "stamina" && randomPlayerCard.Stamina < randomPcCard.Stamina)
  {
      alert(`Sorry, but the Computer had a higher value. You now have ${playerLives} left.`)
      playerLives -= 1
      currentCard();
  }

  else if (choose == "stamina" && randomPlayerCard.Stamina > randomPcCard.Stamina)
  {
      alert(`Hooray! Your value was higher! The computer now only has ${pcLives} left.`)
      pcLives -= 1
      currentCard();
  }

  else if (choose == "mana" && randomPlayerCard.Mana < randomPcCard.Mana)
  {
      alert(`Sorry, but the Computer had a higher value. You now have ${playerLives} left.`)
      playerLives -= 1
      currentCard();
  }

  else if (choose == "mana" && randomPlayerCard.Mana > randomPcCard.Mana)
  {
      alert(`Hooray! Your value was higher! The computer now only has ${pcLives} left.`)
      pcLives -= 1
      currentCard();
  }

  else if (choose == "villainy" && randomPlayerCard.Villainy < randomPcCard.Villainy)
  {
      alert(`Hooray! Your value was lower! The computer now only has ${pcLives} lives left.`)
      pcLives -= 1
      currentCard();
  }

  else if (choose == "villainy" && randomPlayerCard.Villainy > randomPcCard.Villainy)
  {
      alert(`Sorry, but the Computer had a lower value. You now have ${playerLives} lives left.`)
      playerLives -= 1
      currentCard();
  }

  else if( choose != "strength" || "stamina" || "mana" || "villainy")
  {
      alert(`I'm sorry, but that is not an option.`)
      currentCard();
  }

  else
  {
      alert(`Draw! You and the computer had the same value. No lives are lost.`)
      currentCard();
  }

}

currentCard();
