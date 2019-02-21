import React from 'react';
import Links from './navbarLinks';
import Menu from './menuButton';

const Navbar = ({onNavbarClick, toggleHidden, display}) => {
        return (    
          <div className = "navbar">
            <div>
                <img 
                    className ="profileImage" 
                    src="https://s3.amazonaws.com/arbelaez/Bulbasaur.jpg"
                    alt="Profile"
                    onClick = {() => onNavbarClick('about')}>
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
  