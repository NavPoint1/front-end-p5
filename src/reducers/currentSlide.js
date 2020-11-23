const currentSlide = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_SLIDE_INDEX':
            return action.payload
        case 'ERROR':
            console.log(action.payload)
            return {}
        default:
            return state
    }
}

export default currentSlide