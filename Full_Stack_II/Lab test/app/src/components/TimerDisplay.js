import React from 'react';

const inputFormat = (input) => {
    return (input === '' ? '' : new Date(input).toLocaleTimeString())
}

const TimerDisplay = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" value={inputFormat(props.input)} id={props.id} readOnly/>
        </div>
    );
}

export default TimerDisplay;