import React from 'react';
import axios from 'axios';

class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.post('https://jsonplaceholder.typicode.com/users', this.state)
             .then(resp => {
                 console.log(resp.data);
                 this.props.addUserHandler();
             });
    }

    render() { 
        return (<div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Person Name:
                            <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>);
    }
}

export default AddStudent;