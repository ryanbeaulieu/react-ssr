import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchUsers } from '../../actions';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                This is a list of users
                <ul>
                    {this.props.users.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

//Used to load data from the server
export const loadData = (store) => {
    return store.dispatch(fetchUsers());
}

export default connect (mapStateToProps, { fetchUsers })(UsersList);