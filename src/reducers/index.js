import { combineReducers } from 'redux';
import login from './login'
import guide from './guide'
import slides from './slides'
import currentSlide from './currentSlide'

const reducers = combineReducers({
    loggedInUser: login,
    guide,
    slides,
    currentSlide
});

export default reducers;