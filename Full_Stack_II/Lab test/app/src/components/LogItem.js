import React from 'react';

const LogItem = (props) => {
    const minutes = Math.floor(props.durationSec/60);
    const seconds = props.durationSec - minutes*60;
    return (
        <label>{`Duration => minutes: ${minutes} seconds: ${seconds}`}</label>
    );
}

export default LogItem;