import React, { ReactNode } from 'react';
import '../App.css';
import { player } from './GameScreen';

interface Props {
    stars: number
}

class ScoreDisplay extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): ReactNode {
        return (
            <section>
                Congratulations! Your followers have given you {this.props.stars} stars for your repo!

                You are currently making {player.starsPerCommit()} stars per commit!
            </section>
        );
    }
}

export default ScoreDisplay;
