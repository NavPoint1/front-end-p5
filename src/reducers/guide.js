const guide = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_GUIDE':
            return action.payload
        case 'ERROR':
            console.log(action.payload)
            return {}
        default:
            return state
    }
}

export default guide