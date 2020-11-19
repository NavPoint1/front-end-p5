const loggedIn = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN_TOGGLE':
            return !state
        default:
            return state
    }
}

export default loggedIn