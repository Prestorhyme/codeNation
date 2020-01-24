import React from 'react';
import './App.css';

class App extends React.Component
{
  state = 
  {
    names: ["John", "Holly", "Vicky"],
    petName: "...",
    weapon: "..."
  }

  changeNames = () =>
  {
    this.setState({
      names: ["Peter", "Arthur", "Anne"]
    })
  }

  originalNames = () =>
  {
    this.setState({
      names: ["John", "Holly", "Vicky"]
    })
  }

  getWeapon = (event) =>
  {
    this.setState({
      weapon: event.target.value 
    })
  }

  getPetName = (event) =>
  {
    this.setState({
      petName: event.target.value
    })
  }

  render()
  {
    const namesList = this.state.names.map((name) =>{
      return <h1>My name is {name}</h1>
    })

    return(
      <div>
        {namesList}
        <div>
          <input onChange={this.getPetName}type="text" />
          <h2>Your pet name is {this.state.petName}</h2>
          <div>
            <input onChange={this.getWeapon}type="text"></input>
            <h3>Your weapon of choice is a/an {this.state.weapon}</h3>
          </div>
        </div>
        
        <button onClick={this.changeNames} className="btn">Change names</button>
        <button onClick={this.originalNames} className="otherBtn">Original Names</button>
      </div>
    )
  }



}

export default App;
