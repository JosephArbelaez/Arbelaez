import React from 'react';
import Links from './navbarLinks';

const Navbar = ({onNavbarClick, toggleHidden, display, profileImageDisplay, page}) => {
        return (    
          <div className = "navbar">
            <div className= "navbarContent">
                <div>
                    <img 
                        className ="profileImage" 
                        src= "https://arbelaezonlineportfolio.s3.us-east-2.amazonaws.com/b0179b9c-17db-4424-b5a7-1d00920d377e.jpg"
                        alt="Profile"
                        onClick = {() => onNavbarClick('about')}
                        style={{display: profileImageDisplay}}>
                    </img>
                </div>
                <div className = "menu" onClick = {toggleHidden.bind(this)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <Links onNavbarClick={onNavbarClick} display = {display} page={page}/>
            </div>
          </div>
      );
  }
  
  export default Navbar;
  