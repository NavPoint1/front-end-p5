import { combineReducers } from 'redux';
import login from './login'
import guide from './guide'

const reducers = combineReducers({
    loggedInUser: login,
    guide
});

export default reducers;