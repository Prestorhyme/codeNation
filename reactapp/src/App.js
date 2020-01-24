// import React from 'react';
// import './App.css';
// import javascriptImage from "./img/images.png";

// function App() {
//   return(
//     <React.Fragment>
//     <h1 className="title">Welcome to our first React App.</h1>
//       {/* NOT html. It's JSX! */}
//       {/* this is how you coment in react*/}
//       <h1>Hello World!</h1>
//       <input type="text" />
//     <img src=
//       <img src={javascriptImage} /> 
//     </React.Fragment>
      
//   );
// }

// export default App;


// import React from 'react';
// import '.App.css/';
// import Mydiv from '.component/Mydiv';

// const App = () =>
// {
//   return 
//   (
//     <div>
//       <Mydiv />
//     </div>
//   );
// }


import React from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <Navbar link1="home" link2="about" link3="contact" pages={3}/>
        <Card name="Conor" city="Manchester" avatar="Mandalorian"/>
        <Card name="David" city="Belfast" avatar="Jedi"/>
        <Card name="Edmund" city="Edinburgh" avatar="Sith"/>
      </div>
    );
  }
}

export default App;