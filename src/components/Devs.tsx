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
    constructor(props: Props) {
        super(props);
        this.state = {
            clicked: false
        };
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
