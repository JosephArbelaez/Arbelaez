import React from 'react';

const Navbar = ({onNavbarClick}) => {
        return (    
          <div className = "navbar">
            <div>
                <img 
                    className ="profileImage" 
                    src="https://s3.amazonaws.com/arbelaez/Bulbasaur.jpg"
                    alt="Profile Image"
                    onClick = {() => onNavbarClick('about')}>
                </img>
            </div>
            <div className ="navbarLinks">
                <h4 className = "link" onClick = {() => onNavbarClick('about')}>About</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('experience')}>Experience</h4>                <h4 className = "link" onClick = {() => onNavbarClick('education')}>Education</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('interests')}>Interests</h4>
            </div>
          </div>
      );
  }
  
  export default Navbar;
  