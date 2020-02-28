import React, { ReactNode } from 'react';
import '../App.css';
import GameScreen, { player } from './GameScreen';

interface Props {
    screen: GameScreen
}

class UpgradeButton extends React.Component<Props> {
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
                Upgrade your commits with {player.getCommitUpgradeCost()} stars!
            </section>
        );
    }
}

export default UpgradeButton;
