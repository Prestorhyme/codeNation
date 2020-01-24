import React, {useState} from 'react';
import './App.css';

function App() {
  const [gameConsoles, setConsoles] = useState(
    [
      {
        name: "PS4",

        price: 200, 

        condition: "New"
      },
      {
        name: "Xboxone",

        price: 250, 

        condition: "New"
      },
      {
        name: "Alienware Pc", 

        price: 999,

        condition: "New"
      }
    ]
  )
   
    const addDiscount = () => {
      const newArray = [...gameConsoles];
      
      newArray[0].price = 120
      newArray[0].condition = "Used";
      setConsoles(newArray);

      newArray[1].price = 190
      newArray[1].condition = "Used";
      setConsoles(newArray);

      newArray[2].price = 600
      newArray[2].condition = "Used";
      setConsoles(newArray);
      
    }

    const removeDiscount = () => {
      const newArray = [...gameConsoles];

      newArray[0].price = 200;
      newArray[0].condition = "New";
      setConsoles(newArray);

      newArray[1].price = 250
      newArray[1].condition = "New";
      setConsoles(newArray);

      newArray[2].price = 999
      newArray[2].condition = "New";
      setConsoles(newArray);
    }

}

  return(
    <div className = "App">
    {gameConsoles.map( (device) =>{ 
      return <h1>The {device.name} is {device.condition} and is worth £{device.price}</h1>
    })}
    <button id="btn" onClick = {addDiscount}>find a discount</button>
    <button id="btn" onClick = {removeDiscount}>see original prices</button>
    <button id="btn" onClick = {basket}>Add to basket</button>
    </div>
  )
  


export default App;
