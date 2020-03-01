import React, { ReactNode } from 'react';
import '../App.css';
import { player } from './GameScreen';

interface Props {
    stars: number
}

class ScoreDisplay extends React.Component<Props> {
    render(): ReactNode {
        return (
            <section>
                Congratulations! Your followers have given you {this.props.stars.toFixed(2)} stars for your repo!

                You are currently making {player.starsPerCommit().toFixed(2)} stars per commit!
            </section>
        );
    }
}

export default ScoreDisplay;
