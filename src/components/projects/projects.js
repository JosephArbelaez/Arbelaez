import React from 'react';
import Card from './card';


const Projects = ({projects}) => {
        return (
            <div className='tc'>
                <h1>Projects</h1>
                <div className = "projectCards">
                    {
                        projects.map((project, i) => {
                            return (
                                <Card 
                                    key={i} 
                                    name={projects[i].name} 
                                    picture={projects[i].picture} 
                                    icon1={projects[i].icon1}
                                    icon2={projects[i].icon2}
                                    icon3={projects[i].icon3}
                                    icon4={projects[i].icon4}
                                    icon5={projects[i].icon5}
                                    icon6={projects[i].icon6}
                                    link={projects[i].link}
                                    p1={projects[i].p1}
                                    p2={projects[i].p2}
                                    p3={projects[i].p3}
                                />
                            );
                        })
                    }
                </div>    
            </div>
        );
    }

export default Projects;