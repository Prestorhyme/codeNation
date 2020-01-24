import React, {useState} from 'react';
import './App.css';

function App() {
  const [gameConsoles, setConsoles] = useState(
    [
      {
        name: "PS4",
        price: 199,
        yearOfRelease: 2013
      },
      {
        name: "Xboxone",
        price: 299,
        yearOfRelease: 2015
      },
      {
        name: "Nint3endo Switch",
        price: 200,
        yearOfRelease: 2017
      }
    ]
  )


  const addDiscount = () => {

    const newArray = [...gameConsoles];

    newArray[1].price = 100

    setConsoles(newArray);
  }

  

  return (
    <div className="App">
      {gameConsoles.map( (device) =>{
        return <h1>The {device.name} was released in {device.yearOfRelease}. It costs {device.price}</h1>
      })}
      <button id ="btn" onClick={addDiscount}>Add discount for Xboxone</button>
    </div>
  );
}

export default App;
