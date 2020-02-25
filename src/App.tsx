import React from 'react';
import './App.css';
import { Player } from './logic/player';

export const player: Player = new Player();

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <GameScreen />
        </div>
    );
}

export default App;
