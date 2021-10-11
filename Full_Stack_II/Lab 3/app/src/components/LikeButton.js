import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likes: 0};

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        this.setState(state => ({likes: state.likes + 1}));
    }

    render() { 
        return (<span>
                    <button onClick={this.handleButtonClick}>Like</button>
                    {` ${this.state.likes} Likes`}
                </span>);
    }
}
 
export default LikeButton;