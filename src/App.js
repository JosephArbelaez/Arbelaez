import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import Landing from './components/landing';
import Content from './components/content';
import ScrollArea from 'react-scrollbar';
import ErrorBoundary from './components/functionality/errorBoundary';
import 'tachyons';
import Game from "./components/game/game";

const initialState = {
  choice: 'empty',
  page: 'about',
  disp: 'block',
  profileImageDisplay: 'inline'
}

class App extends Component {
  
  constructor() {
    super();
    this.state = initialState;
  }

  updateDimensions () {
    if(window.innerWidth < 800){
      this.setState({disp:'none'});
    } else {
      this.setState({disp:'block'});
    }
  }

  toggleHidden = () => {
    if (this.state.disp === 'block'){
      this.setState({disp:'none'});
    } 
    if (this.state.disp === 'none'){
      this.setState({disp:'block'});
    }
    if (this.state.disp === ''){
      this.setState({disp:'none'});
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
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
    if (page === 'about') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "inline" });
      }
    }
    if (page === 'projects') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
      }
    }
    if (page === 'experience') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
      }
    }
    if (page === 'skills') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
      }
    }
    if (page === 'education') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
      }
    }
    if (page === 'interests') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
      }
    }
  }

  render() {
    const { choice , page, disp, profileImageDisplay} = this.state;
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
                  <Navbar onNavbarClick={this.onNavbarClick} toggleHidden={this.toggleHidden} display={this.state.disp} profileImageDisplay={this.state.profileImageDisplay}/>
                  <ScrollArea
                                speed={0.8}
                                className="content"
                                contentClassName="content"
                                horizontal={false}
                                >
                    <ErrorBoundary>
                      <Content page={this.state.page} />
                    </ErrorBoundary>
                  </ScrollArea>
                </div>
              )  : 
              (
                <Game />
              )
          }
      </div>
    );
  }
}

export default App;
