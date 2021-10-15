import React from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};

        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    handleAddUser(user) {
        this.setState(state => ({users: [...state.users, user]}));
    }

    handleDeleteUser(id) {
        this.setState(state => ({users: state.users.filter(user => user.id !== id)}));
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState(() => ({users: res.data}));
        });
    }

    render() { 
        return <>
                    <AddStudent addUserHandler={this.handleAddUser}/>
                    <ul>
                    {this.state.users.map((user, i) => (
                        <li key={i}>
                            {user.name}
                            <DeleteStudent id={user.id} deleteUserHandler={this.handleDeleteUser}/>
                        </li>))}
                    </ul>
               </>
    }
}
 
export default UserList;