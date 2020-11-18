import React from 'react';
import Home from './components/Home/Home';
import UsersList, {loadData} from './components/UsersList/UsersList';

export default [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/users",
        component: UsersList,
        exact: true,
        loadData // loadData: loadData
    }
]