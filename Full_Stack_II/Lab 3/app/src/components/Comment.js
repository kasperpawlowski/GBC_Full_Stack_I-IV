import React from 'react';
import LikeButton from './LikeButton';
import Timer from './Timer';

class Comment extends React.Component {
    render() { 
        return (<div>
                    <Timer time={this.props.time}/>{' '}
                    <b>{this.props.text}</b>{' '}
                    <LikeButton />
                </div>);
    }
}
 
export default Comment;