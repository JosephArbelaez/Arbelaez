import React from 'react';
import Unity, {UnityContent} from "react-unity-webgl";

export class Game extends React.Component {
    constructor(props) {
        super(props);
        
        this.unityContent = new UnityContent (
            "../../../Build/Builds.json",
            "../../../Build/UnityLoader.js"
        );
    }

    render() {
        return(
            <div className = "game">
                <Unity unityContent={this.unityContent} />;
            </div>
        );
    }
}

export default Game;
