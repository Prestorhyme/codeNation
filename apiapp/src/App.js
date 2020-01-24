import React from 'react';
import axios from 'axios';
import './App.css';
import {Users} from './components/Users';

class App extends React.Component
{

  state = 
  {
    users: [],
    loading: false 
  }

  async componentDidMount()
  {
    this.setState({
      loading: true
    })

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    this.setState ({
      users: response.data,
      loading: false
    })
  }

  render()
  {
    const allUsers = this.state.users.map( (object) => {
      return <h1 key={object.id}>My name is {object.name} and I'm from {object.address.city}</h1>
    });

    return (
      <div>
        <Users data={allUsers} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
