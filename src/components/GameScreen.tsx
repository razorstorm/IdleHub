import React, { ReactNode } from 'react';
import '../App.css';
import ScoreDisplay from './ScoreDisplay';
import CommitButton from './CommitButton';
import UpgradeButton from './UpgradeButton';
import DevWorkDisplay from './DevWorkDisplay';
import SaveProgressDisplay from './SaveProgressDisplay';
import Devs from './Devs';
import { Container } from 'react-bootstrap';
import Player from '../logic/Player';
import StackOverflow from './StackOverflow';

export const player: Player = new Player();

interface State {
    percentage: number,
    savePercentage: number,
    timeUntilSave: number
}

interface Props {

}

class GameScreen extends React.Component<Props, State> {
    lastTrigger: Date
    lastSaved: Date
    constructor(props: object) {
        super(props);
        this.state = {
            percentage: 0,
            savePercentage: 0,
            timeUntilSave: 0
        };
        this.lastTrigger = new Date();
        this.lastSaved = new Date();
    }

    componentDidMount() {
        setInterval(this.gameTick.bind(this), 50);
        const data = localStorage.getItem('playerData');
        if (data) {
            player.deserialize(data);
        }
    }

    render(): ReactNode {
        return (
            <Container>
                <ScoreDisplay stars={player.stars} />
                <CommitButton screen={this} />
                <UpgradeButton screen={this} />
                <DevWorkDisplay screen={this} percentage={this.state.percentage} />
                <SaveProgressDisplay screen={this} savePercentage={this.state.savePercentage} timeUntilSave={this.state.timeUntilSave} />
                <Devs screen={this} devs={player.devs} />
                <StackOverflow screen={this} devs={player.devs} />
            </Container>
        );
    }

    gameTick() {
        const ticksNeeded = player.msPerDev();
        const saveMSNeeded = 10000;
        const newTime = new Date();
        const frameDiff = newTime.getTime() - this.lastTrigger.getTime();
        const saveFrameDiff = newTime.getTime() - this.lastSaved.getTime();
        let newState: State = {
            percentage: 0,
            savePercentage: 100 * (Math.min(saveFrameDiff, saveMSNeeded)) / saveMSNeeded,
            timeUntilSave: Math.max(0, saveMSNeeded - saveFrameDiff),
        };
        if (player.devs > 0) {
            newState.percentage = 100 * (Math.min(frameDiff, ticksNeeded)) / ticksNeeded;
        }

        this.setState(newState);

        if (frameDiff >= ticksNeeded) {
            this.lastTrigger = newTime;
            player.gainStars(player.starPerDev());
            this.forceUpdate();
        }
        if (saveFrameDiff >= saveMSNeeded) {
            this.saveGame();
            this.lastSaved = newTime;
        }
    }

    saveGame() {
        localStorage.setItem('playerData', player.serialize());
    }
}

export default GameScreen;
