import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Content from './components/content';
import 'tachyons';

const initialState = {
  choice: 'empty',
  page: 'about',
  disp: 'block',
  profileImageDisplay: 'inline',
  profileImageDisplay2: 'none',
}

class App extends Component {
  
  constructor() {
    super();
    this.state = initialState;
  }

  updateDimensions () {
    if(window.innerWidth < 800){
      this.setState({disp:'none'});
      this.setState({profileImageDisplay: 'none'});
      this.setState({profileImageDisplay2: 'flex'});
    } else {
      this.setState({disp:'block'});
      this.setState({profileImageDisplay: 'inline'});
      this.setState({profileImageDisplay2: 'none'});
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
        this.setState({profileImageDisplay: "none" });
        this.setState({profileImageDisplay2: 'flex'});
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
        this.setState({profileImageDisplay2: 'none'});
      }
    }
    if (page === 'projects') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
        this.setState({profileImageDisplay2: 'none'});
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
        this.setState({profileImageDisplay2: 'none'});
      }
    }
    if (page === 'experience') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
        this.setState({profileImageDisplay2: 'none'});
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
        this.setState({profileImageDisplay2: 'none'});
      }
    }
    if (page === 'skills') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
        this.setState({profileImageDisplay2: 'none'});
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
        this.setState({profileImageDisplay2: 'none'});
      }
    }
    if (page === 'education') {
      this.setState({page: page});
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
        this.setState({profileImageDisplay2: 'none'});
      }
      if (window.innerWidth > 800){
        this.setState({profileImageDisplay: "inline" });
        this.setState({profileImageDisplay2: 'none'});
      }
    }
  }

  render() {
    const { choice , page, disp, profileImageDisplay, lightboxDisplay} = this.state;
    return (
      <div>
          {
            choice === 'home' || choice ==='empty' ?
              (
                <div>
                  <Navbar onNavbarClick={this.onNavbarClick} toggleHidden={this.toggleHidden} display={this.state.disp} profileImageDisplay={this.state.profileImageDisplay} page={this.state.page}/>
                  <Content page={this.state.page} onThumbnailClick={this.onThumbnailClick} closeThumbnail={this.closeThumbnail} lightboxDisplay={this.state.lightboxDisplay} profileImageDisplay2={this.state.profileImageDisplay2}/>
                </div>
              )  : 
              (
                <div></div>
              )
          }
      </div>
    );
  }
}

export default App;
