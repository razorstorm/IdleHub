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
        console.log('ASDF');
        player.makeCommit();
        this.props.screen.forceUpdate();
    }

    render(): ReactNode {
        return (
            <section className="upgradeButton" onClick={this.clickHandler.bind(this)}>
                Make Commit!
            </section>
        );
    }
}

export default CommitButton;
