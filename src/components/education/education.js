import React from 'react';
import EducationCard from './educationCard';

const Education = ({education}) => {

        return (
            <div className="tc" >
                    <h1>Education</h1>
                    {
                        education.map((ed, i) => {
                            return (
                                <EducationCard 
                                    key={i} 
                                    degree={education[i].degree} 
                                    institution={education[i].institution} 
                                    gpa={`GPA: ` + education[i].gpa}
                                    description={education[i].description}
                                    date= {`Graduation Date: ` + education[i].date}
                                    location={education[i].location} />
                                );
                            })
                    }
            </div>
        );
    }


export default Education;