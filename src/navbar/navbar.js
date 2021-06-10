import React from 'react';
import Links from './navbarLinks';

const Navbar = ({onNavbarClick, toggleHidden, display, profileImageDisplay, selectedLink, page}) => {
        return (    
          <div className = "navbar">
            <div className="navbarContent">
                <div>
                    <img 
                        className ="profileImage" 
                        src= "https://arbelaezonlineportfolio.s3.us-east-2.amazonaws.com/b0179b9c-17db-4424-b5a7-1d00920d377e.jpg"
                        alt="Profile"
                        onClick = {() => onNavbarClick('about')}
                        style={{display: profileImageDisplay}}>
                    </img>
                </div>
                <Links onNavbarClick={onNavbarClick} display = {display} page={page}/>
                <div className = "menu" >
                    <div className="bar" onClick = {toggleHidden.bind(this)}></div>
                    <div className="bar" onClick = {toggleHidden.bind(this)}></div>
                    <div className="bar" onClick = {toggleHidden.bind(this)}></div>
                </div>
            </div>
          </div>
      );
  }
  
  export default Navbar;
  