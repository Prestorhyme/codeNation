import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import './App.css';

class App extends React.Component
{
  state =
  {
    basket: 0
  }

  addToBasket = () =>
  {
    this.setState({
      basket:this.state.basket + 1
    })
  }

  render()
  {

  
  return(
    <BrowserRouter>
    <div className = "container">
      <Nav myBasket={this.state.basket}/>
      <Switch>
        <Route exact path="/" render={ () => <Home sale={150} toBasket={this.addToBasket}/>}/>
        <Route path="/about" component={About} />
      </Switch>
    </div>
    </BrowserRouter>
  );

  }
}

export default App;
