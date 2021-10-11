import React from 'react';
import Comment from './Comment';

class TweetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '',
                      comments: []};

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if(this.state.text === '') {
            return;
        }
        this.setState(state => {
            return {text: '', comments: [...state.comments, 
                                         {text: this.state.text, time: Date.now()}]};
        });
    }

    renderComments() {
        return this.state.comments.map((comment, id) => {
            return <Comment key={id} 
                            text={comment.text} 
                            time={comment.time} />
        });
    }

    render() { 
        return (<div style={{textAlign: "center"}}>
                    <h1>{this.props.status}</h1>
                    <hr/>
                    <form onSubmit={this.handleFormSubmit}>
                            <input type="text" value={this.state.text} onChange={this.handleTextChange} />
                            <input type="submit" value="Post" />
                    </form>
                    {this.renderComments()}
                </div>);
    }
}
 
export default TweetContainer;