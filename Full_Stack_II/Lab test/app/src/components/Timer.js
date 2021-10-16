import React from 'react';
import '../App.css';
import TimerDisplay from './TimerDisplay';
import Button from './Button';
import LogItem from './LogItem';
import Clock from './Clock';

// For clarity, the app was divided into more resuable components

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {startTime: '', endTime: '', timerLog: [], isRunning: false};
        
        this.startButtonHandler = this.startButtonHandler.bind(this);
        this.stopButtonHandler = this.stopButtonHandler.bind(this);
        this.resetButtonHandler = this.resetButtonHandler.bind(this);
    }

    startButtonHandler() {
        // endTime reset either not to display label when timer started second time
        this.setState({startTime: new Date(), endTime: '', isRunning: true});
    }

    stopButtonHandler() {
        // prevent from stopping the timer if not started previously
        if(!this.state.isRunning) {
            return;
        }

        this.setState((state) => {
            const endTime = new Date();
            return {
                endTime,
                timerLog: [...state.timerLog, Math.round((endTime - state.startTime)/1000)],
                isRunning: false
            }
        });
    }
    
    resetButtonHandler() {
        this.setState({startTime: '', endTime: '', timerLog: [], isRunning: false});
    }    

    render() { 
        return (
            <div className="container">
                <TimerDisplay label="Start Time:" input={this.state.startTime} id="txtStartTime" />
                <TimerDisplay label="End Time:" input={this.state.endTime} id="txtEndTime" />
                <Clock isRunning={this.state.isRunning} />
                <Button label="Start" handler={this.startButtonHandler} id="btnStart" />
                <Button label="Stop" handler={this.stopButtonHandler} id="btnStop" />
                <Button label="Reset" handler={this.resetButtonHandler} id="btnReset" />
                <div>
                    {this.state.timerLog.map((duration, index) => <LogItem durationSec={duration} key={index}/>)}
                </div>
            </div>
        );
    }
}
 
export default Timer;