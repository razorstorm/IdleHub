import React, { ReactNode } from 'react';
import '../App.css';
import { player } from '../App';
import GameScreen from './GameScreen';

interface Props {
    screen: GameScreen
}

class CommitButton extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    clickHandler() {
        if (player.canBuyCommitUpgrade()) {
            player.buyCommitUpgrade();
            this.props.screen.forceUpdate();
        }
    }

    render(): ReactNode {
        const displayOpacity = player.canBuyCommitUpgrade() ? '100%' : '20%';
        return (
            <section className="upgradeButton" style={{ opacity: displayOpacity }} onClick={this.clickHandler.bind(this)}>
                Upgrade: {player.getCommitUpgradeCost()}
            </section>
        );
    }
}

export default CommitButton;
