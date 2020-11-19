import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchAdmins } from '../../actions';
import requireAuth from '../../hocs/requireAuth';

class AdminsList extends Component {
    
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        return (
            <div>
                This is a list of admins
                <ul>
                    {this.props.admins.map(admin => {
                        return <li key={admin.id}>{admin.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({admins}) => {
    return {
        admins
    }
}

export default {
    component: connect (mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
    loadData: ({dispatch}) => dispatch(fetchAdmins())
};