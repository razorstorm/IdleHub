import React, { ReactNode } from 'react';
import '../App.css';
import GameScreen, { player } from './GameScreen';
import { ProgressBar, Col } from 'react-bootstrap';

interface Props {
    screen: GameScreen,
    percentage: number
}

interface IState {
}

class DevWorkDisplay extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div {...{ fluid: "sm" }} className='container devBar'>
                <section>
                    {player.devs} devs making {player.starPerDev()} stars per {(player.msPerDev() / 1000).toFixed(2)} seconds.
                </section>
                <Col>
                    <ProgressBar className="devProgress" now={this.props.percentage} label={`${this.props.percentage.toFixed(2)}%`} />
                </Col>
            </div>

        );
    }
}

export default DevWorkDisplay;
