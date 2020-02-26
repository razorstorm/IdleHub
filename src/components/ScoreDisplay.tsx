import React, { ReactNode } from 'react';
import '../App.css';

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
                {this.props.stars}
            </section>
        );
    }
}

export default ScoreDisplay;
