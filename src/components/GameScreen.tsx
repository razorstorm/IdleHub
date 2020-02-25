import React from 'react';
import './App.css';
import { Player } from './logic/player';

class GameScreen extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            needsUpdate: false
        };
    }
}

export default App;
