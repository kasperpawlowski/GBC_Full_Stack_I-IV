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

    getUsers() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState(() => ({users: res.data}));
        });
    }

    handleAddUser() {
        this.getUsers();
    }

    handleDeleteUser() {
        this.getUsers();
    }

    componentDidMount() {
        this.getUsers();
    }

    render() { 
        return <>
                    <AddStudent addUserHandler={this.handleAddUser}/>
                    <ul>
                    {this.state.users.map((user, id) => (
                        <li key={id}>
                            {user.name}
                            <DeleteStudent id={id+1} deleteUserHandler={this.handleDeleteUser}/>
                        </li>))}
                    </ul>
               </>
    }
}
 
export default UserList;