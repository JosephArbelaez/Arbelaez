import React from 'react';

const ExperienceCard = ({role, company, details, dates, location}) => {
    /* 
        Max 35 characters for the text portion.
        6 icons
    */
    return (
                <div className = "bg-white v-base hover-bg-lightest-blue dib br3 pa3 ma2 bw2 shadow-5 tc"> 
                    <div className="tl">
                        <h4 className="mv0 i">{role}</h4>
                        <p className="mv0 i">{company}</p>
                        <p className="mv0 i">{location}</p>
                        <p className="mv0 i">{dates}</p>
                        <p className="">{details}</p>
                    </div>
                    
                    
                    
                </div>
    );
}

export default ExperienceCard;