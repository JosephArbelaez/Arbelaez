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
                                    picture={projects[i].picture} />
                            );
                        })
                    }
                </div>    
            </div>
        );
    }

export default Projects;