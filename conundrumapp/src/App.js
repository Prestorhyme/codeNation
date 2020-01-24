import React from 'react';



class App extends React.Component
{
  state = 
  {
    num1: 0,
    operator: "",
    num2: 0,
    result: 0,
    Clear: ""
  }

  getOperator = (operator) =>{
    this.setState({
      operator: operator
      
    })
  }

  getNumber = (number) =>{

    if(this.state.num1 === 0) {
      this.setState({
        num1: number 
      })
    } else if(this.state.num2 === 0){
        this.setState({
          num2: number 
        })
    }
  }

  getReset = () =>{
    this.setState({
      num1: 0,
      num2: 0,
      operator: "",
      result: ""
    })
  
  }

  getResult = () =>{
    if(this.state.operator === "+"){
      this.setState({
        result: this.state.num1 + this.state.num2
      })
    } else if (this.state.operator === "-"){
      this.setState({
        result: this.state.num1 - this.state.num2
      })
    } else if (this.state.operator === "/"){
      this.setState({
        result: this.state.num1 / this.state.num2
      })
    } else if (this.state.operator === "*"){
      this.setState({
        result:this.state.num1 * this.state.num2
      })
    }
  }



  render() 
  {
    return (
              <div className="App">
                <div className="calc-wrapper">
                  <div className="row">
                    <h1>{this.state.num1}</h1>
                    <h1>{this.state.operator}</h1>
                    <h1>{this.state.num2}</h1>
                    <h1>Result: {this.state.result}</h1>
                  </div>
                  <div className="row">
                    <button onClick={() => this.getNumber(7)}>7</button>
                    <button onClick={() => this.getNumber(8) }>8</button>
                    <button onClick={() => this.getNumber(9) }>9</button>
                    <button onClick ={() => this.getOperator("/")}>/</button>
                  </div>
                  <div className="row">
                  <button onClick={() => this.getNumber(4) }>4</button>
                  <button onClick={() => this.getNumber(5) }>5</button>
                  <button onClick={() => this.getNumber(6) }>6</button>
                  <button onClick ={() => this.getOperator("*")}>*</button>
                  </div>            
                  <div className="row">
                  <button onClick={() => this.getNumber(1) }>1</button>
                  <button onClick={() => this.getNumber(2) }>2</button>
                  <button onClick={() => this.getNumber(3) }>3</button>
                    <button onClick ={() => this.getOperator("+")}>+</button>
                  </div>            
                  <div className="row">
                  <button onClick ={() => this.getOperator(".")}>.</button>
                    <button onClick={() => this.getNumber(0) }>0</button>
                    <button onClick={this.getResult}>=</button>
                    <button onClick ={() => this.getOperator("-")}>-</button>
                  </div>
                  <div className="ClearButton">
                  <button onClick ={() => this.getReset("Clear")}>Clear</button>
                  </div>            
                </div>
              </div>
    );    
  }
}

export default App;