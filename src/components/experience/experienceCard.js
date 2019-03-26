import React from 'react';

const ExperienceCard = ({role, company, details, dates, location}) => {
    /* 
        Max 35 characters for the text portion.
        6 icons
    */
    return (
                    <div className="card">
                        <h4 className="mv0 i">{role}</h4>
                        <p className="mv0 i">{company}</p>
                        <p className="mv0 i">{location}</p>
                        <p className="mv0 i">{dates}</p>
                        <p className="">{details}</p>
                    </div>
    );
}

export default ExperienceCard;