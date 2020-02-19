import React from 'react';

const Links = ({onNavbarClick, display, page}) => {
        switch (page) {
            case 'about': {
                return (
                    <div className ="navbarLinks" style={{display: display}}>
                        <h4 className = "link selectedLink" onClick = {() => onNavbarClick('about')}>About</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('experience')}>Experience</h4>                
                        <h4 className = "link" onClick = {() => onNavbarClick('education')}>Education</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                    </div>
              );
            }
            case 'projects': {
                return (
                    <div className ="navbarLinks" style={{display: display}}>
                        <h4 className = "link" onClick = {() => onNavbarClick('about')}>About</h4>
                        <h4 className = "link selectedLink" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('experience')}>Experience</h4>                
                        <h4 className = "link" onClick = {() => onNavbarClick('education')}>Education</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                    </div>
              );
            }
            case 'experience': {
                return (
                    <div className ="navbarLinks" style={{display: display}}>
                        <h4 className = "link" onClick = {() => onNavbarClick('about')}>About</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                        <h4 className = "link selectedLink" onClick = {() => onNavbarClick('experience')}>Experience</h4>                
                        <h4 className = "link" onClick = {() => onNavbarClick('education')}>Education</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                    </div>
              );
            }
            case 'education': {
                return (
                    <div className ="navbarLinks" style={{display: display}}>
                        <h4 className = "link" onClick = {() => onNavbarClick('about')}>About</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('experience')}>Experience</h4>                
                        <h4 className = "link selectedLink" onClick = {() => onNavbarClick('education')}>Education</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                    </div>
              );
            }
            case 'skills': {
                return (
                    <div className ="navbarLinks" style={{display: display}}>
                        <h4 className = "link" onClick = {() => onNavbarClick('about')}>About</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                        <h4 className = "link" onClick = {() => onNavbarClick('experience')}>Experience</h4>                
                        <h4 className = "link" onClick = {() => onNavbarClick('education')}>Education</h4>
                        <h4 className = "link selectedLink" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                    </div>
              );
            }
            default: 
                return (
                <div className ="navbarLinks" style={{display: display}}>
                    <h4 className = "link" onClick = {() => onNavbarClick('about')}>About</h4>
                    <h4 className = "link" onClick = {() => onNavbarClick('projects')}>Projects</h4>
                    <h4 className = "link" onClick = {() => onNavbarClick('experience')}>Experience</h4>                
                    <h4 className = "link" onClick = {() => onNavbarClick('education')}>Education</h4>
                    <h4 className = "link" onClick = {() => onNavbarClick('skills')}>Skills</h4>
                </div>
          );
        }

  }
  
  export default Links;
  