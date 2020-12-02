const themes = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_THEMES':
            return action.payload
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default themes