import React from 'react';

const Card = ({name, picture}) => {
    /* 
        Max 35 characters for the text portion.
        6 icons
    */
    return (
                <div className = "bg-white v-base hover-bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                    <h2>{name}</h2>
                    <img src={picture}></img>
                    <div>
                    <img src='https://s3.amazonaws.com/arbelaez/html48.png'></img>
                    <img src='https://s3.amazonaws.com/arbelaez/css48.png'></img>
                    <img src='https://s3.amazonaws.com/arbelaez/js48.png'></img>
                    <img src='https://s3.amazonaws.com/arbelaez/html48.png'></img>
                    <img src='https://s3.amazonaws.com/arbelaez/css48.png'></img>
                    <img src='https://s3.amazonaws.com/arbelaez/js48.png'></img>
                        <p>123456789012345678901234567890</p>
                        <p>123456789012345678901234567890</p>
                        <p>123456789012345678901234567890</p> 
                    <img src='https://s3.amazonaws.com/arbelaez/github48.png'></img>
                    </div>
                </div>
    );
}

export default Card;