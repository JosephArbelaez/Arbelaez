import React from 'react';

const Menu = ({onNavbarClick, onMenuPress, menuDisplay}) => {

        return (    
            <div className = "menu" onClick = {() => onMenuPress()} >
                <div className="bar" onClick = {() => onMenuPress()}></div>
                <div className="bar" onClick = {() => onMenuPress()}></div>
                <div className="bar" onClick = {() => onMenuPress()}></div>
            </div>
      );
  }
  
  export default Menu;
  