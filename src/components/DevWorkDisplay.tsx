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
    render(): ReactNode {
        let className = 'devProgress';
        let animated = true;
        let displayPercent: number = this.props.percentage;
        let label = `${displayPercent.toFixed(2)} %`
        if (player.msPerDev() < 400) {
            displayPercent = 100;
            label = '';
        }
        if (player.msPerDev() < 700 || displayPercent > 90 || displayPercent < 25) {
            className = 'fast-bar';
        }

        return (
            <div {...{ fluid: "sm" }} className='container devBar'>
                <section>
                    {player.devs} devs making {player.starPerDev()} stars per {(player.msPerDev() / 1000).toFixed(2)} seconds.
                </section>
                <Col>
                    <ProgressBar animated={animated} className={className} now={displayPercent} label={label} />
                </Col>
            </div>

        );
    }
}

export default DevWorkDisplay;
