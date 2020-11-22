const slides = (state = [], action) => {
    switch(action.type) {
        case 'SAVE_SLIDE':
            return action.payload
        case 'CREATE_SLIDE':
            return [...state, action.payload]
        case 'ERROR':
            console.log(action.payload)
            return {}
        default:
            return state
    }
}

export default slides