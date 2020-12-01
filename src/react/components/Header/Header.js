import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({auth}) => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/admins">Admins</Link>
            {auth ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Log In</a> }
        </header>
    )
}

const mapStateToProps = ({auth}) => {
    return {auth}
}

export default connect(mapStateToProps)(Header);