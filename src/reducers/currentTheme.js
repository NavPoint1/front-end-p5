const currentTheme = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_THEME':
            return action.payload
        case 'RESET_CURRENT_THEME':
            return {}
        case 'CREATE_GUIDE':
            return {}
        case 'SUBMIT_EDITED_GUIDE':
            return {}
        case 'CLEAR_GUIDE':
            return {}
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default currentTheme