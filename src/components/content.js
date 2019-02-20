import React from 'react';
import About from './about';
import Projects from './projects/projects'
import Education from './education';
import Skills from './skills';
import Interests from './interests';
import Experience from './experience/experience';
import { projects } from './projects/projectList';
import { experiences } from './experience/experienceList';
import Scroll from './functionality/scroll';
import ReactDOM from 'react-dom'
import ScrollArea from 'react-scrollbar';
import ErrorBoundary from './functionality/errorBoundary';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: projects,
            experiences: experiences
        }
    }
    render (){
        const { projects } = this.state;
        return (
                <div>
                    {
                        this.props.page === 'about' ? 
                        (
                            <About />
                        ) :
                        this.props.page === 'projects' ? 
                        (

                            <Projects projects={projects}/>

                        ) :
                        this.props.page === 'experience' ? 
                        (
                            <Experience experiences={experiences}/>
                        ) :
                        this.props.page === 'education' ? 
                        (
                            <Education />
                        ) :
                        this.props.page === 'skills' ? 
                        (
                            <Skills />
                        ) :
                        this.props.page === 'interests' ? 
                        (
                            <Interests />
                        ) : <div> </div>
                    }

                </div>
        )
    }
}

export default Content;
