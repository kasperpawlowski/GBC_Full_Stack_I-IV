import React from 'react';

const Button = (props) => {
    return (
        <button type="button" onClick={props.handler} id={props.id}>{props.label}</button>
    );
}

export default Button;