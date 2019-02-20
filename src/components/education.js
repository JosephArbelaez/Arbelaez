import React from 'react';

class Education extends React.Component {
    render(){
        return (
            <div>
                <h1>Education</h1>
                <div className= "education"> 
                    <h3 classname = "eduDegree">Computer Information Systems A.S.</h3>
                    <h2 className = "eduCollege">Naugatuck Valley Community College</h2>
                    <br />
                    <p className = "eduGPA">3.60</p>
                    <p className = "eduFeatures">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias inventore quidem, nisi maiores voluptatibus possimus quisquam quibusdam ea eaque, adipisci error, exercitationem alias repellendus quae magni pariatur earum perferendis neque?</p>
                    <p className = "expDate">Graduation: December 2017</p>
                    <p className = "expLocation">Waterbury, CT</p>
                </div>
                <div className= "education"> 
                    <h3 classname = "eduDegree">Biology B.S.</h3>
                    <h2 className = "eduCollege">Queens College</h2>
                    <br />
                    <p className = "expDate">Graduation: June 2014</p>
                    <p className = "expLocation">Flushing, NY</p>
                </div>
            </div>
        );
    }
}

export default Education;