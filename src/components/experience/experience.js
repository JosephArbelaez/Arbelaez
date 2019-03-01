import React from 'react';
import ExperienceCard from './experienceCard';

const Experience = ({experiences}) => {

        return (
            <div className="tc" >
                    <h1>Experience</h1>
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
        )
    }

export default Experience;