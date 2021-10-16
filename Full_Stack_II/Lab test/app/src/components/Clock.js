import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    componentDidMount() {
        // update the state every second
        this.timer = setInterval(() => {
            this.setState({time: new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        // stop updating the state
        clearInterval(this.timer);
    }

    render() { 
        return (
            <label>{`${this.props.isRunning ? new Date(this.state.time).toLocaleTimeString() : ''}`}</label>
        );
    }
}
 
export default Clock;