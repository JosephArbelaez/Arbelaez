import React from 'react';

class About extends React.Component {
    render(){
        return (
            <div>
                    <h1>Joseph</h1>
                    <div className = "lastname">
                    <h1>Arbelaez</h1>
                </div>
                <div className = "subheading">
                    6206 SW Rutland Road · Bentonville, AR 72712 · (203) 910-0731 
                    <a href="mailto:josepharbelaez@gmail.com">josepharbelaez@gmail.com</a>
                </div>
                <div classname = "description">
                Dedicated web developer, with a passion for designing web applications. Developed an
expense reimbursement system, a social platform, and a lawyer / client portal. My hard work
has placed me into two scholastic honor societies, an internship and propelled me through the
Revature coding boot camp.
                </div>
                <div classname = "icons">
                    <a href="https://www.linkedin.com/in/joseph-arbelaez-a064708b/">
                    <img src="https://s3.amazonaws.com/arbelaez/linkedin+(darkblue).png" ></img>
                    </a>
                    <a href="https://github.com/JosephArbelaez">
                    <img src="https://s3.amazonaws.com/arbelaez/github.png" ></img>
                    </a>
                </div>
            </div>
        );
    }
}


export default About;