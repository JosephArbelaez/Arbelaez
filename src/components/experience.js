import React, {Component} from 'react';
import experience from '../jsons/experience.json';

class Experience extends Component {
    render(){
        let exps = []
        let expList = experience.map(function(exp){
            return <Experience />;
        })
        return (
            <div>
                <h3>{expList}</h3>
            </div>
        )
    }
}

export default Experience;