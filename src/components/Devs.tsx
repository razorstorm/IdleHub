import React, { ReactNode } from 'react';
import '../App.css';
import { player } from '../App';
import GameScreen from './GameScreen';

interface Props {
    screen: GameScreen,
    devs: number
}

interface IState {
    clicked: boolean
}

class Dev extends React.Component<Props, IState> {
    lastTrigger: Date
    constructor(props: Props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.lastTrigger = new Date();
    }

    handleDevUpdate() {
        const ticksNeeded = player.msPerDev() * 1000;
        const newTime = new Date();
        const frameDiff = newTime.getTime() - this.lastTrigger.getTime();
        console.log(ticksNeeded);

        if (frameDiff >= ticksNeeded) {
            this.lastTrigger = newTime;
            console.log(frameDiff);
            player.gainStars(5);
            this.props.screen.forceUpdate();
        }
    }

    componentDidMount() {
        setInterval(this.handleDevUpdate.bind(this), 16.6667)
    }

    clickHandler() {
        player.buyDev();
        this.props.screen.forceUpdate();
    }

    onMouseUp() {
        this.setState({ clicked: false });
    }

    onMouseDown() {
        this.setState({ clicked: true });
    }

    render(): ReactNode {
        const className = this.state.clicked ? 'animated upgradeButton' : 'upgradeButton';
        const displayOpacity = player.canBuyDev() ? '100%' : '20%';
        return (
            <section>
                <section>
                    You have {player.devs} developers!
                </section>
                <section className={className} style={{ opacity: displayOpacity }} onAnimationEnd={this.onMouseUp.bind(this)} onMouseDown={this.onMouseDown.bind(this)} onClick={this.clickHandler.bind(this)}>
                    Buy dev for {player.getDevCost()}
                </section>
            </section>

        );
    }
}

export default Dev;
