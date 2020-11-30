const currentSlide = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_SLIDE_INDEX':
            return action.payload
        case 'LOGOUT':
            return {}
        case 'EDIT_SLIDES':
            return 0
        default:
            return state
    }
}

export default currentSlide