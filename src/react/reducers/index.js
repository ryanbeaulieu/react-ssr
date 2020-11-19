import { combineReducers } from 'redux';
import usersReducer from './user.reducer';
import authReducer from './auth.reducer';
import adminsReducer from './admins.reducer';

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
})