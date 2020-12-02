import { combineReducers } from 'redux';
import login from './login'
import guide from './guide'
import guides from './guides'
import slides from './slides'
import currentSlide from './currentSlide'
import errors from './errors'
import themes from './themes'
import currentTheme from './currentTheme'

const reducers = combineReducers({
    loggedInUser: login,
    guide,
    guides,
    slides,
    currentSlide,
    errors,
    themes,
    currentTheme
});

export default reducers;