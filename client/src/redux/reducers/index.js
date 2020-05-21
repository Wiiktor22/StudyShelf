import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import userData from '../reducers/userData';

export default combineReducers({
    auth,
    userData
})