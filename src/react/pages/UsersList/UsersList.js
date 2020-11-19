import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchUsers } from '../../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
    
    componentDidMount() {
        this.props.fetchUsers();
    }

    setMetaTags() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} users loaded`}</title>
                <meta property="og:title" content="Meta Tag title" />
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.setMetaTags()}
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
const loadData = (store) => {
    return store.dispatch(fetchUsers());
}

export default {
    component: connect (mapStateToProps, { fetchUsers })(UsersList),
    loadData
};