import React from 'react';
import 'react-loading-bar/dist/index.css';
import ProgressBar from '../components/functionality/progressbar';

class Interests extends React.Component {
    constructor() {
        super();
        this.state = {
            action: '',
            timeoutId: false,
            percentage: 0
        }
    }
    
        componentDidMount() {
            this.actionTicker()
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
            
            this.setState({ action, timeoutId });
        }

        progressTicket = () => {
            setTimeout(
                function() {
                    this.setState({position: 1});
                }
                .bind(this),
                400
            );
        }
        getAction() {
            const actions = ["Constructing additional Pylons...","Raining on my parade...","Dancing with myself...","Rolling Initiative...","Catching em' all...", "Saying yes and ...?","Fighting evil by moonlight...", "Activating my trap card...",
                    "Training like a Super Saiyan...", "Facetuning those blemishes...","Buscando mi camisa negra...", "Sashaying away...", "Wavedashing..."];
            let text = actions[this.randomInt(0, actions.length-1)];
                
            return text;
            }
    render(){
        return (
            <div>
                <h1>Interests</h1>
                <h3>Currently: <p className="action-animation">{this.state.action}</p></h3>
                <ProgressBar percentage={this.state.percentage} />
            </div>
        );
    }
}

export default Interests;