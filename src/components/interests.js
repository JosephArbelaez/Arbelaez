import React from 'react';
import 'react-loading-bar/dist/index.css';

class Interests extends React.Component {
    constructor() {
        super();
        this.state = {
            action: '',
            timeoutId: false,
            percentage: '0%'
        }
    }
    
        componentDidMount() {
            this.actionTicker();
        }
    
        componentWillUnmount() {
            clearTimeout(this.state.timeoutId)
        }
        
        randomInt(min, max) {
            return Math.round(min + (Math.random() * (max-min)));
        }
    
        actionTicker = () => {
            const action = this.getAction();
            const timeoutId = setTimeout(this.actionTicker, 2000);
            this.setState({ action, timeoutId});
        }

        progressTicker = () => {
            this.setState({percentage: '0%'});
            setTimeout(this.setState({percentage: '20%'}), 400);
            setTimeout(this.setState({percentage: '40%'}), 800);
            setTimeout(this.setState({percentage: '60%'}), 1200);
            setTimeout(this.setState({percentage: '80%'}), 1600);
            setTimeout(this.setState({percentage: '100%'}), 1990);
        }
        getAction() {
            const actions = [
                "Constructing additional Pylons...",
                "Rolling Initiative...",
                "Catching em' all...", 
                "Fighting evil by moonlight...", 
                "Activating my trap card...",
                "Training like a Super Saiyan...", 
                "Facetuning those blemishes...",
                "Buscando mi camisa negra...", 
            ];
            let text = actions[this.randomInt(0, actions.length-1)];
            this.progressTicker();
            return text;
            }

    render(){
        return (
            <div className="interest">
                <h1 className="interestTitle">Interests</h1>
                <h3 className="interestAnimation">Currently: <p className="action-animation">{this.state.action}</p></h3>
            </div>
        );
    }
}

export default Interests;