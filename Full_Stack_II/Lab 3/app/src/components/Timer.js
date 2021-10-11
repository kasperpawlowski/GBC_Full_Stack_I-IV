import React from 'react';
import Moment from 'react-moment';

class Timer extends React.Component {
    render() {
        return <Moment format="HH:MM:ss">{this.props.time}</Moment>
    }
}
 
export default Timer;