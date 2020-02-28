import React, { ReactNode } from 'react';
import '../App.css';
import GameScreen from './GameScreen';
import { ProgressBar, Col } from 'react-bootstrap';

interface Props {
    screen: GameScreen,
    savePercentage: number,
    timeUntilSave: number
}

interface IState {
}

class SaveProgressDisplay extends React.Component<Props, IState> {
    render(): ReactNode {
        return (
            <div {...{ fluid: "sm" }} className='container devBar'>
                <section>
                    Time until AutoSave
                </section>
                <Col>
                    <ProgressBar className="devProgress" animated now={this.props.savePercentage} label={`${this.props.timeUntilSave / 1000} seconds`} />
                </Col>
            </div>

        );
    }
}

export default SaveProgressDisplay;
