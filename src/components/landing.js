import React from 'react';

const Landing = ({onChoiceButtonClick}) => {

    return (
        <div className="landingPage">
            <h1 className="landingName">Joseph Arbelaez</h1>
            <div>
                <button className="buttonEnter" onClick = {() => onChoiceButtonClick('home')}>Enter</button>
            </div>
        </div>
    );
}

export default Landing;