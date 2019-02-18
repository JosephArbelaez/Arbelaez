import React from 'react';

class Navbar extends React.Component {
    render() {
        return (    
          <div className = "navbar">
            <div>
                <a href="">
                    <img 
                        className ="profileImage" 
                        src="https://s3.amazonaws.com/arbelaez/Bulbasaur.jpg"
                        alt="Profile Image"
                        a>
                    </img>
                </a>
            </div>
            <div className ="navbarLinks">
                <a href="" className="link">About</a>
                <br />
                <br />
                <a href="" className="link">Projects</a>
                <br />
                <br />
                <a href="" className="link">Education</a>
                <br />
                <br />
                <a href="" className="link">Skills</a>
                <br />
                <br />
                <a href="" className="link">Interests</a>
            </div>
          </div>
      );
    }
  }
  
  export default Navbar;
  