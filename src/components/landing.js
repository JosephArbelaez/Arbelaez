import React from 'react';

const Landing = ({onChoiceButtonClick}) => {

    return (
        <div className="landingPage">
            <h1>Welcome to my Portfolio Page</h1>
            <button onClick = {() => onChoiceButtonClick('home')}>Enter</button>

        </div>
    );
}

export default Landing;