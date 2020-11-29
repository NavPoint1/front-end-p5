const errors = (state = "", action) => {
    switch(action.type) {
        case 'ERROR':
            return action.payload
        case 'CLEAR_ERRORS':
            return ""
        default:
            return state
    }
}

export default errors