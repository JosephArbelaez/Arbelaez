import React from 'react';
import ExperienceCard from './experienceCard';

const Experience = ({experiences}) => {

        return (
            <div>
                    <h1 className="title">Experience</h1>
                    <div className="cardCollection">
                    {
                        
                        experiences.map((experience, i) => {
                            return (
                                <ExperienceCard 
                                    key={i} 
                                    role={experiences[i].role} 
                                    company={experiences[i].company}
                                    details={experiences[i].details}
                                    dates={experiences[i].dates}
                                    location={experiences[i].location} />
                            );
                        })
                    }
                    </div>
            </div>
        )
    }

export default Experience;