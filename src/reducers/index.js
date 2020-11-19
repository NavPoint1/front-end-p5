import { combineReducers } from 'redux';
import loggedIn from './loggedIn'

const reducers = combineReducers({
    // syntactic sugar for loggedIn: loggedIn
    loggedIn
});

export default reducers;