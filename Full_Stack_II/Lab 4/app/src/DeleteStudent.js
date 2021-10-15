import React from 'react';
import axios from 'axios';

class DeleteStudent extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
             .then(resp => {
                 console.log(resp);
                 this.props.deleteUserHandler(this.props.id);
             });
    }

    render() { 
        return (<div>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit">Delete</button>
                    </form>
                </div>);
    }
}
 
export default DeleteStudent;