import React from 'react';
import About from './about';
import Projects from './projects'
import Education from './education';
import Skills from './skills';
import Interests from './interests';
import Experience from './experience';

class Content extends React.Component {

    render (){
        return (
        <div className="content">
            
            {
                this.props.page === 'about' ? 
                (
                    <About />
                ) :
                this.props.page === 'projects' ? 
                (
                    <Projects />
                ) :
                this.props.page === 'experience' ? 
                (
                    <Experience />
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
