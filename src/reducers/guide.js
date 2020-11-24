const guide = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_GUIDE':
            console.log(action.payload)
            return action.payload
        case 'LOAD_GUIDE':
            return action.payload
        case 'CLEAR_GUIDE':
            return {}
        case 'ERROR':
            console.log(action.payload)
            return {}
        default:
            return state
    }
}

export default guide