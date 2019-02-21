import React from 'react';

const Links = ({onNavbarClick, display}) => {

        return (
            <div className ="navbarLinks" style={{display: display}}>
                <h4 className = "link" onClick = {() => onNavbarClick('about')}>About</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('experience')}>Experience</h4>                
                <h4 className = "link" onClick = {() => onNavbarClick('education')}>Education</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                <h4 className = "link" onClick = {() => onNavbarClick('interests')}>Interests</h4>
            </div>
      );
  }
  
  export default Links;
  