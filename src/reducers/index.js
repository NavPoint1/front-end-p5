import { combineReducers } from 'redux';
import login from './login'
import guide from './guide'
import slides from './slides'

const reducers = combineReducers({
    loggedInUser: login,
    guide,
    slides
});

export default reducers;