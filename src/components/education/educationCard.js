import React from 'react';

const EduCard = ({degree, institution, gpa, description, date, location}) => {

    return (
                <div className = "bg-white v-base hover-bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                <h3 classname = "eduDegree">{degree}</h3>
                    <h2 className = "eduCollege">{institution}</h2>
                    <br />
                    <p className = "eduGPA">{gpa}</p>
                    <p className = "eduFeatures">{description}</p>
                    <p className = "expDate">{date}</p>
                    <p className = "expLocation">{location}</p>
                </div>
    );
}

export default EduCard;