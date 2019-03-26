import React from 'react';
import EducationCard from './educationCard';

const Education = ({education}) => {

        return (
            <div>
                    <h1 className="title">Education</h1>
                    <div className="cardCollection">
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
            </div>
        );
    }


export default Education;