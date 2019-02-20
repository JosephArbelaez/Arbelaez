import React from 'react';

class About extends React.Component {
    render(){
        return (
            <div>
                <div className="f2 name">
                    <h1>Joseph <span className="lastName">Arbelaez</span></h1>
                    <p className="f4">6206 SW Rutland Road · Bentonville, AR 72712 · (203) 910-0731 · <span><a className="f4 email" href="mailto:josepharbelaez@gmail.com">josepharbelaez@gmail.com</a></span></p>
                </div>
                <div>
                <p className="description i">Dedicated web developer, with a passion for designing web applications. Developed an
expense reimbursement system, a social platform, and a lawyer / client portal. My hard work
has placed me into two scholastic honor societies, an internship and propelled me through the
Revature coding boot camp.</p>
                </div>
                <br />
                <div classname = "icons">
                    <a className = "icon1" href="https://www.linkedin.com/in/joseph-arbelaez-a064708b/">
                    <img src="https://s3.amazonaws.com/arbelaez/linkedin48.png" ></img>
                    </a>
                    <a href="https://github.com/JosephArbelaez">
                    <img src="https://s3.amazonaws.com/arbelaez/github48.png" ></img>
                    </a>
                </div>
            </div>
        );
    }
}


export default About;