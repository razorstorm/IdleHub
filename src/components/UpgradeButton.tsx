import React, { ReactNode } from 'react';
import '../App.css';
import { player } from '../App';
import GameScreen from './GameScreen';

interface Props {
    screen: GameScreen
}

class UpgradeButton extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    // clickHandler() {
    //     player.commitUpgradeLevel();
    //     this.props.screen.forceUpdate();
    // }

    render(): ReactNode {
        return (<div></div>)
        // return (
        //     <section onClick={this.clickHandler.bind(this)}>
        //         Upgrade: {player.getCommitUpgradeCost()}
        //     </section>
        // );
    }
}

export default UpgradeButton;
