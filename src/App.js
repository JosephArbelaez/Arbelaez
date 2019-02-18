import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/landing';

const initialState = {
  choice: 'empty'
}

class App extends Component {
  
  constructor() {
    super();
    this.state = initialState;
  }

  onChoiceButtonClick = (choice) => {
    if (choice === 'empty') {
      this.setState({choice: choice});
    }
    if (choice === 'game') {
      this.setState({choice: choice});
    } 
    if (choice === 'home') {
      this.setState({choice: choice});
    }
  }

  render() {
    const { choice } = this.state;
    return (
      <div className="App">
          {
            choice ==='empty' ?
              ( 
                <Landing 
                  onChoiceButtonClick={this.onChoiceButtonClick}
                /> 
              ) : choice === 'home' ?
              (
                <Navbar />
              )  : 
              (
                <div>
                </div>
              )
          }
          
      </div>
    );
  }
}

export default App;
