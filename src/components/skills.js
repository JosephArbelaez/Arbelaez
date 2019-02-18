import React from 'react';
import SkillBar from 'react-skillbars';
import skills from '../skills.json';

class Skills extends React.Component {
    colors = {
        bar: 'aqua',
        title: {
            text: 'white',
            background: '#41D3BD'
        }
    }
    render(){
        return (
            <div>
                <h1>Skills</h1>
                <SkillBar skills={skills} colors = {this.colors}/>
            </div>
        );
    }
}

export default Skills;