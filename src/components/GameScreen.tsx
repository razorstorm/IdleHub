import React, { ReactNode } from 'react';
import '../App.css';
import ScoreDisplay from './ScoreDisplay';
import CommitButton from './CommitButton';
import UpgradeButton from './UpgradeButton';
import { player } from '../App';

class GameScreen extends React.Component {
    constructor(props: object) {
        super(props);
        this.state = {
            needsUpdate: false
        };
    }

    render(): ReactNode {
        return (
            <section>
                <ScoreDisplay {...{ screen: this, stars: player.stars }} />
                <CommitButton  {...{ screen: this }} />
                <UpgradeButton  {...{ screen: this }} />
            </section>
        );
    }
}

export default GameScreen;
