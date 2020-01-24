import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
      //'as' renames BrowserRouter to Router
import Route from 'react-router-dom/Route';

const User = ({match}) => {
  return(<h1>Welcome User {match.params.username}</h1>)
}


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <ul>
        <li>
        <NavLink to="/" exact activeStyle ={
          {color: "green"}
          }>Home</NavLink>
        </li>
        <li>
        <NavLink to="/https://stackoverflow.com/questions/56907286/npm-warn-typescript-eslint-eslint-plugin1-6-0-requires-a-peer-of-typescript" exact activeStyle ={
          {color: "green"}
          }>About</NavLink>
        </li>
        <li>
        <NavLink to="/user/John" exact activeStyle ={
          {color: "green"}
          }>User</NavLink>
        </li>
      </ul>
        

      <Route path="/" exact strict render = {
        () => {
          return(<h1>Hello World!</h1>);
        }
      }/>

      <Route path="/about" exact strict render = {
        () => {
          return(<h1>Hello About!</h1>);
        }
      }/>

      <Route Path="/user/:username" exact strict component = {User}/> 
      
      </div>
      </Router>
    );
  }
}

export default App;
