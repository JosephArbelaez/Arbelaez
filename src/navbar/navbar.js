import React from 'react';
import Links from './navbarLinks';

const Navbar = ({onNavbarClick, toggleHidden, display, profileImageDisplay}) => {
        return (    
          <div className = "navbar">
            <div className="navbarContent">
                <div>
                    <img 
                        className ="profileImage" 
                        src="https://lh3.googleusercontent.com/4GUPtStCW_kGsaQGOr7cNn_RaO3i7XlWyoWaQZrn7s492DTHo4NmGgRAE3N3YXaZRiMhQCtjvbJtr1Rb2Lfu3zJ2UWIp11d9T4JaLQT3nHMaU40thw-wnaCbKbx7SiyftGMnQWZmuodzfTtgFS1cLiqgfK0vD7BUNlux4jZmaKonuFb_3hAmk6MDCuTest0HVN-0nvTqN_9ScpSFHRbR7RZo-3rzvgOM2YFztOI-NoiqPyiJGxcojNCMoErhrx7AKMq1ZFQF0SOgUMLJYdIEorPqCOcz_UAzzgrDsguYv_yrymQvyM4Z6g-bqbU6hWVee7JYtl0VMaZykWbFOEcBdKQNRsdR7RHWxVr2s2PkiN2TR3NTslCPvc_hyOR77XmDSpLF0UebEGT99b84-ZOvHozjeyTX6EmLUcfy5dH06rW6JV5a9gyB3U0-od51XwEsw1RSvjPs_G9rbazxr77yZPm0xnxgZfCo-MM_-xcz2xRnPDcBGWrGWeoFaTKC8a5b6VtHCu44w7kcMrwX0Ckl-CfCYViWt6Miyv_yOiUqKmKVFcA1epci42kyNGbZqfRQ3Bnyp40PtG1UGyWomF9rFmNNEdLfVbd9T46XJi9qe78i2P-uor5MIyJlpDvVoWrEQ3jNA4fIRXGZNvs5AILOEkqOFAT0VqU=w516-h557-no"
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
          </div>
      );
  }
  
  export default Navbar;
  