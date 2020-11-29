const currentSlide = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_SLIDE_INDEX':
            return action.payload
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default currentSlide