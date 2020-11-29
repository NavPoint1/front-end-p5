import { combineReducers } from 'redux';
import login from './login'
import guide from './guide'
import guides from './guides'
import slides from './slides'
import currentSlide from './currentSlide'
import errors from './errors'

const reducers = combineReducers({
    loggedInUser: login,
    guide,
    guides,
    slides,
    currentSlide,
    errors
});

export default reducers;