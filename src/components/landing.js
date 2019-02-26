import React from 'react';

const Landing = ({onChoiceButtonClick}) => {

    return (
        <div className="landingPage">
            <h1 className="landingName">Joseph Arbelaez</h1>
            <div className="buttons">
                <button className="buttonEnter" onClick = {() => onChoiceButtonClick('home')}>Enter</button>
                <br />
                <button className="buttonGame" onClick = {() => onChoiceButtonClick('game')}>Game</button>
            </div>
        </div>
    );
}

export default Landing;