import React from 'react';

const Card = ({name, thumbnail, image ,icon1, icon2, icon3, icon4, icon5, icon6, link, p1, p2, p3, onThumbnailClick, tagline, summary}) => {
    /* 
        Max 30 characters for the text portion.
        6 icons
    */

    return (
                <div className = "projectCard">
                    <div className ="projectDescription">
                        <div className="projectTitle">
                            <p>{name}</p>
                        </div>
                        <div className="projectTagline">
                            <p>{tagline}</p>
                        </div>
                        <div className="projectSummary">
                            <p>{summary}</p>
                        </div>
                        <div className="projectKeyFeatures">
                            <ul>
                                <li>{p1}</li>
                                <li>{p2}</li>
                                <li>{p3}</li>
                            </ul>
                        </div>
                        <div className="projectTech">
                            <img src={icon1}></img>
                            <img src={icon2}></img>
                            <img src={icon3}></img>
                            <img src={icon4}></img>
                            <img src={icon5}></img>
                            <img src={icon6} ></img>
                        </div>
                        <div className="projectButtons">
                            <button className="projectButton"> 
                                <a href={link} className="link"> 
                                    <p className="projectButtonText">GitHub</p> 
                                </a> 
                            </button>
                        </div>
                    </div>
                    <div className="projectThumbnail">
                        <img src={image} onClick={()=> onThumbnailClick(image)}></img>
                    </div>
                </div>
    );
}

export default Card;