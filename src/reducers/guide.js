const guide = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_GUIDE':
            return action.payload
        case 'SUBMIT_EDITED_GUIDE':
            return action.payload
        case 'LOAD_GUIDE':
            return action.payload
        case 'LIKE_GUIDE_TOGGLE':
            return action.payload
        case 'CLEAR_GUIDE':
            return {}
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default guide