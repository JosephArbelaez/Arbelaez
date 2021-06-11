import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Content from './components/content';
import 'tachyons';

const initialState = {
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
      this.setState({profileImageDisplay: 'none'});
    } else {
      this.setState({disp:'block'});
      this.setState({profileImageDisplay: 'inline'});
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

  onNavbarClick = (page) => {
    if (page === 'about') {
      this.setState({page: page});
      
      if (window.innerWidth < 800){
        this.setState({disp: "none"});
        this.setState({profileImageDisplay: "none" });
      }
      if (window.innerWidth > 800){
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
        this.setState({profileImageDisplay2: 'none'});
      }
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar onNavbarClick={this.onNavbarClick} toggleHidden={this.toggleHidden} display={this.state.disp} profileImageDisplay={this.state.profileImageDisplay} page={this.state.page}/>
        <Content page={this.state.page} onThumbnailClick={this.onThumbnailClick} closeThumbnail={this.closeThumbnail} lightboxDisplay={this.state.lightboxDisplay} profileImageDisplay={this.state.profileImageDisplay}/>
      </div>
    );
  }
}

export default App;
