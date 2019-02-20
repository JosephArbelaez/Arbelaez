import React, {Component} from 'react';

class Experience extends Component {

    render(){
        return (
            <div className="expPage" >
                <div className="expHeader">
                    <h1>Experience</h1>
                </div>
                <div className= "experience"> 
                    <h3 classname = "expRole">Supplier API Integration Analyst</h3>
                    <h2 className = "expCompany">Walmart / Cognizant</h2>
                    <br />
                    <p className = "expDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias inventore quidem, nisi maiores voluptatibus possimus quisquam quibusdam ea eaque, adipisci error, exercitationem alias repellendus quae magni pariatur earum perferendis neque?</p>
                    <p className = "expDate">June 2018 - Present</p>
                    <p className = "expLocation">Bentonville, AR</p>
                </div>
                <br />
                <div className= "experience"> 
                    <h3 classname = "expRole">Full Stack Web Developer</h3>
                    <h2 className = "expCompany">Revature</h2>
                    <br />
                    <p className = "expDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias inventore quidem, nisi maiores voluptatibus possimus quisquam quibusdam ea eaque, adipisci error, exercitationem alias repellendus quae magni pariatur earum perferendis neque?</p>
                    <p className = "expDate">February 2018 - Present</p>
                    <p className = "expLocation">New York, NY</p>
                </div>
                <br />
                <div className= "experience"> 
                    <h3 classname = "expRole">IT Intern</h3>
                    <h2 className = "expCompany">Office of State  Ethics</h2>
                    <br />
                    <p className = "expDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias inventore quidem, nisi maiores voluptatibus possimus quisquam quibusdam ea eaque, adipisci error, exercitationem alias repellendus quae magni pariatur earum perferendis neque?</p>
                    <p className = "expDate">August 2018 - December 2018</p>
                    <p className = "expLocation">Hartford, CT</p>
                </div>

            </div>
        )
    }
}

export default Experience;