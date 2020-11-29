const guides = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_GUIDES':
            return action.payload
        case 'CLEAR_GUIDES':
            return []
        default:
            return state
    }
}

export default guides