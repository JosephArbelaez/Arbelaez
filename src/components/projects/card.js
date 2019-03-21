import React from 'react';

const Card = ({name, thumbnail, image ,icon1, icon2, icon3, icon4, icon5, icon6, link, p1, p2, p3, onThumbnailClick}) => {
    /* 
        Max 30 characters for the text portion.
        6 icons
    */

    return (
                <div className = "bg-white v-base hover-bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 w5 tc">
                    <h2>{name}</h2>
                    <div className="thumbnail">
                        <img className = "br3 bw2 ba" src={thumbnail} onClick={()=> onThumbnailClick(image)}></img>
                    </div>
                    <div>
                        <img src={icon1}></img>
                        <img src={icon2}></img>
                        <img src={icon3}></img>
                        <img src={icon4}></img>
                        <img src={icon5}></img>
                        <img src={icon6} ></img>
                            <p>{p1}</p>
                            <p>{p2}</p>
                            <p>{p3}</p> 
                        <a href={link}> 
                            <button className="projectButton"> 
                                <p className="projectButtonText">GitHub</p> 
                                <img src='https://s3.amazonaws.com/arbelaez/GitHub48+Inverted.png'></img>
                            </button>
                        </a> 
                    </div>
                </div>
    );
}

export default Card;