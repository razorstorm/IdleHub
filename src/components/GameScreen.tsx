import React, { ReactNode } from 'react';
import '../App.css';
import ScoreDisplay from './ScoreDisplay';
import CommitButton from './CommitButton';
import UpgradeButton from './UpgradeButton';
import DevWorkDisplay from './DevWorkDisplay';
import Devs from './Devs';
import { player } from '../App';
import { Container } from 'react-bootstrap';
// localStorage.setItem('myData', data);

class GameScreen extends React.Component {
    lastTrigger: Date
    constructor(props: object) {
        super(props);
        this.state = {
            needsUpdate: false
        };
        this.lastTrigger = new Date();
    }

    render(): ReactNode {
        return (
            <Container>
                <ScoreDisplay {...{ screen: this, stars: player.stars }} />
                <CommitButton {...{ screen: this }} />
                <UpgradeButton {...{ screen: this }} />
                <DevWorkDisplay {...{ screen: this, percentage: 0 }} />
                <Devs {...{ screen: this, devs: player.devs }} />
            </Container>
        );
    }

    gameTick() {
        const ticksNeeded = player.msPerDev();
        const newTime = new Date();
        const frameDiff = newTime.getTime() - this.lastTrigger.getTime();
        console.log(ticksNeeded);

        if (frameDiff >= ticksNeeded) {
            this.lastTrigger = newTime;
            console.log(frameDiff);
            player.gainStars(5);
            this.forceUpdate();
        }
    }

    componentDidMount() {
        setInterval(this.gameTick.bind(this), 100)
    }
}

export default GameScreen;
