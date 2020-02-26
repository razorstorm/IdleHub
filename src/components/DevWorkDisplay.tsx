import React, { ReactNode } from 'react';
import '../App.css';
import { player } from '../App';
import GameScreen from './GameScreen';
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
                    {player.devs} devs making 5 stars per {player.msPerDev()} ms.
                </section>
                <Col>
                    <ProgressBar now={this.props.percentage} label={`${this.props.percentage}%`} />
                </Col>
            </div>

        );
    }
}

export default DevWorkDisplay;
