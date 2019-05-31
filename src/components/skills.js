import React from 'react';
import SkillBar from 'react-skillbars';
import skills from '../jsons/skills.json';

class Skills extends React.Component {
    colors = {
        bar: '#407899',
        title: {
            text: 'black',
            background: 'white'
        }
    }
    render(){
        return (
            <div className="skills">
                <h1 className="skillTitle">Skills</h1>
                <SkillBar className="skillbars"skills={skills} colors = {this.colors}/>
            </div>
        );
    }
}

export default Skills;