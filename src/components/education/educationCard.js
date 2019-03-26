import React from 'react';

const EduCard = ({degree, institution, gpa, description, date, location}) => {

    return (
                <div className = "card">
                    <p classname = "degree">{degree}</p>
                    <p className = "mv0 i">{institution}</p>
                    <p className = "mv0 i">{gpa}</p>
                    <p className = "mv0 i">{date}</p>
                    <p className = "mv0 i">{location}</p>
                    <p className = "">{description}</p>
                </div>
    );
}

export default EduCard;