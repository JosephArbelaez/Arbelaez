import React from 'react';
import Card from './card';
import { projects } from './projectList';
class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: projects
        }
    }

    render(){
        return (
            <div>
                        <div className = "cardCollection">
                            { 
                                projects.map((project, i) => {
                                    return (
                                        <Card 
                                            key={i} 
                                            name={projects[i].name} 
                                            thumbnail={projects[i].thumbnail}
                                            image={projects[i].image} 
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
                                            onThumbnailClick={this.onThumbnailClick}
                                            tagline={projects[i].tagline}
                                            summary={projects[i].summary}
                                        />
                                    );
                                })
                            }
                        </div>
            </div>
        );
    }
}

export default Projects;