import React from 'react';

class App extends React.Component{

state = {
  result: ("")
} 

getMove = (kungfu) => {
  this.setState({
    move: kungfu
  });
}

getResult = () => {
  if (this.state.getMove === "kiked")
  this.setState({
    result:"kiked"
  })

  else if (this.state.getMove === "hi kiked")
  this.setState({
    result:"hi kiked"
  })

  else if (this.state.getMove === "torenadow kiked")
  this.setState({
    result:"torenadow kiked"
  })
}

render()
  {
    return(
      <div className="row">
        <h1>result: {this.state.result}</h1>
        <button onClick={() => this.getMove("kiked")}>"kiked"</button>
        <button onClick={() => this.getMove("hi kiked")}>"hi kiked"</button>
        <button onClick={() => this.getMove("torenadow kiked")}>"torenadow kiked"</button>
      </div>




    );
  }
}
export default App;
