import React, { ReactNode } from 'react';
import '../App.css';
import GameScreen, { player } from './GameScreen';

interface Props {
    screen: GameScreen,
    devs: number
}

interface IState {
    devClicked: boolean,
    devLevelClicked: boolean,
}

class Dev extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            devLevelClicked: false,
            devClicked: false
        };
    }

    clickHandler() {
        player.buyDev();
        this.props.screen.forceUpdate();
    }

    buyDevLevelHandler() {
        player.buyDevLevel();
        this.props.screen.forceUpdate();
    }

    onDevUp() {
        this.setState({ devClicked: false });
    }

    onDevLevelUp() {
        this.setState({ devLevelClicked: false });
    }

    onDevDown() {
        this.setState({ devClicked: true });
    }

    onDevLevelDown() {
        this.setState({ devLevelClicked: true });
    }

    render(): ReactNode {
        const className = this.state.devClicked ? 'animated upgradeButton' : 'upgradeButton';
        const levelClassName = this.state.devLevelClicked ? 'animated upgradeButton' : 'upgradeButton';
        const displayOpacity = player.canBuyDev() ? '100%' : '20%';
        const devLevelDisplayOpacity = player.canBuyDevLevel() ? '100%' : '20%';
        return (
            <section>
                <section className={className} style={{ opacity: displayOpacity }} onAnimationEnd={this.onDevUp.bind(this)} onMouseDown={this.onDevDown.bind(this)} onClick={this.clickHandler.bind(this)}>
                    Buy dev for {player.getDevCost().toFixed(2)}
                </section>
                <section className={levelClassName} style={{ opacity: devLevelDisplayOpacity }} onAnimationEnd={this.onDevLevelUp.bind(this)} onMouseDown={this.onDevLevelDown.bind(this)} onClick={this.buyDevLevelHandler.bind(this)}>
                    Buy dev level for {player.getDevLevelCost().toFixed(2)}
                </section>
            </section>

        );
    }
}

export default Dev;
