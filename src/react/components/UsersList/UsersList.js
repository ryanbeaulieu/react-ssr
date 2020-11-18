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

export const loadData = () => {
    console.log("Trying to load data");
}

export default connect (mapStateToProps, { fetchUsers })(UsersList);