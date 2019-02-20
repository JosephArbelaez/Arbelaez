import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Content from './components/content';
import ScrollArea from 'react-scrollbar';
import ErrorBoundary from './components/functionality/errorBoundary';
import 'tachyons';

const initialState = {
  choice: 'empty',
  page: 'about'
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

  onNavbarClick = (page) => {
    console.log(this.state.choice);
    console.log(this.state.page);
    if (page === 'about') {
      this.setState({page: page});
    }
    if (page === 'projects') {
      this.setState({page: page});
    }
    if (page === 'experience') {
      this.setState({page: page});
    }
    if (page === 'skills') {
      this.setState({page: page});
    }
    if (page === 'education') {
      this.setState({page: page});
    }
    if (page === 'interests') {
      this.setState({page: page});
    }
  }
  
  render() {
    const { choice , page } = this.state;
    return (
      <div>
          {
            choice ==='empty' ?
              ( 
                <Landing 
                  onChoiceButtonClick={this.onChoiceButtonClick}
                /> 
              ) : choice === 'home' ?
              (
                <div>
                  <Navbar onNavbarClick={this.onNavbarClick}/>
                  <ScrollArea
                                speed={0.8}
                                className="content"
                                contentClassName="content"
                                horizontal={false}
                                >
                                <ErrorBoundary>
                  <Content page={this.state.page}/>
                  </ErrorBoundary>
                            </ScrollArea>
                </div>
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
