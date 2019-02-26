import React from 'react';

const EduCard = ({degree, institution, gpa, description, date, location}) => {

    return (
                <div className = "bg-white v-base hover-bg-lightest-blue dib br3 pa3 ma2 bw2 shadow-5 tl">
                <h3 classname = "tl eduCard">{degree}</h3>
                    <h2 className = "mv0 i">{institution}</h2>
                    <p className = "mv0 i">{gpa}</p>
                    <p className = "mv0 i">{date}</p>
                    <p className = "mv0 i">{location}</p>
                    <p className = "">{description}</p>
                </div>
    );
}

export default EduCard;