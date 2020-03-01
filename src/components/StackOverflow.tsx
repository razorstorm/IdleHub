import React, { ReactNode } from 'react';
import '../App.css';
import GameScreen, { player } from './GameScreen';

interface Props {
    screen: GameScreen,
    devs: number
}

interface IState {
    soClicked: boolean
}

class StackOverflow extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            soClicked: false
        };
    }

    clickHandler() {
        player.toggleStackOverflow();
        this.props.screen.forceUpdate();
    }

    onSOUp() {
        this.setState({ soClicked: false });
    }

    onSODown() {
        this.setState({ soClicked: true });
    }

    render(): ReactNode {
        const className = this.state.soClicked ? 'animated upgradeButton' : 'upgradeButton';
        const displayOpacity = player.canBuyDev() ? '100%' : '20%';
        const message = player.useSO ? 'Stop using StackOverflow' : 'Use StackOverflow'
        return (
            <section>
                <section className={className} style={{ opacity: displayOpacity }} onAnimationEnd={this.onSOUp.bind(this)} onMouseDown={this.onSODown.bind(this)} onClick={this.clickHandler.bind(this)}>
                    {message}
                </section>
            </section>

        );
    }
}

export default StackOverflow;
