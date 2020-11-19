import React from 'react';
import App from './App'
import AdminsList from './pages/AdminsList/AdminsList';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import UsersList, {loadData} from './pages/UsersList/UsersList';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: "/",
                exact: true
            },
            {
                ...UsersList,
                path: "/users",
                exact: true,
            },
            {
                ...AdminsList,
                path: "/admins",
                exact: true
            },
            {
                ...PageNotFound
            }
        ]
    }
]