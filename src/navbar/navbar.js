import React from 'react';
import Links from './navbarLinks';

const Navbar = ({onNavbarClick, toggleHidden, display, profileImageDisplay}) => {
        return (    
          <div className = "navbar">
            <div>
                <img 
                    className ="profileImage" 
                    src="https://s3.amazonaws.com/arbelaez/Bulbasaur.jpg"
                    alt="Profile"
                    onClick = {() => onNavbarClick('about')}
                    style={{display: profileImageDisplay}}>
                </img>
            </div>
            <Links onNavbarClick={onNavbarClick} display = {display}/>
            <div className = "menu" >
                <div className="bar" onClick = {toggleHidden.bind(this)}></div>
                <div className="bar" onClick = {toggleHidden.bind(this)}></div>
                <div className="bar" onClick = {toggleHidden.bind(this)}></div>
            </div>
          </div>
      );
  }
  
  export default Navbar;
  