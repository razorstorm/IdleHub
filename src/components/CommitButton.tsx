import React, { ReactNode } from 'react';
import '../App.css';
import GameScreen, { player } from './GameScreen';

interface Props {
    screen: GameScreen
}

interface IState {
    clicked: boolean;
}

class CommitButton extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    clickHandler() {
        player.makeCommit();
        this.props.screen.forceUpdate();
    }

    onMouseUp() {
        this.setState({ clicked: false });
    }

    onMouseDown() {
        this.setState({ clicked: true });
    }

    render(): ReactNode {
        const className = this.state.clicked ? 'animated upgradeButton' : 'upgradeButton'
        return (
            <section className={className} onAnimationEnd={this.onMouseUp.bind(this)} onMouseDown={this.onMouseDown.bind(this)} onClick={this.clickHandler.bind(this)}>
                Make Commit!
            </section>
        );
    }
}

export default CommitButton;
