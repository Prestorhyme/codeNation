// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Picture from './components/Picture';
import Navbar from './components/Navbar';

class App extends React.Component
{

  state = 
  {
    counter: 0,
    name: ["Rob", "Ned", "Jon"]
  }
  btnFunction = () =>
  {
    this.setState({
      counter: this.state.counter +1
    })
  }

  render() {
    const image1 = 'https://i.pinimg.com/474x/74/52/87/745287cef3702966a83f23d226e1d83d.jpg'
    const image2 = 'http://rgb-group.org/wp-content/uploads/2018/05/Green-Dragon-House-Terrace-4-1200x800-1200x800-500x800-320x240_c.jpg'
    const image3 = 'https://t4.ftcdn.net/jpg/01/30/23/81/240_F_130238182_05AFviRqgoJnyQvqkt9xGNBnZsUh0XTr.jpg'

    return (
      <div>
        <Navbar link1="home" link2="about" link3="contact" pages={3}/>
        <Picture image={image1} name={this.state.name[0]} rankingImage={10} review="A lovely accomodation with a stunning view!" visible={this.state.showCard}/>
        <Picture image={image2} name={this.state.name[1]}  ranking={10} review="Fantastic location, close to the city center! Great host with a great taste in wine!"/>
        <Picture image={image3} name={this.state.name[2]} ranking={1} review="Too many cats...."/>
        
        <h1>My current counter is {this.state.counter}</h1>
        <a onClick={this.btnFunction} className = "myBtn" href = "#">Click Me</a>

      </div>
    );
      
  }
}

export default App;

