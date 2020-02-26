import React from 'react';
import './App.css';
import Player from './logic/Player';
import GameScreen from './components/GameScreen';

export const player: Player = new Player();

export function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
            </header> */}
            <GameScreen />
        </div>
    );
}
