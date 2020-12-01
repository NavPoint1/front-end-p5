const slides = (state = [], action) => {
    switch(action.type) {
        case 'LOGOUT':
            return []
        case 'CREATE_GUIDE':
            return []
        case 'CLEAR_GUIDE_BUILDER':
            return []
        case 'CREATE_SLIDE':
            let newState = [...state, action.payload]
            newState.forEach( (slide, index) => {
                slide.slideNumber = index + 1
            })
            return newState
        case 'DELETE_SLIDE':
            let delState = state.filter(slide => slide.slideNumber !== action.payload)
            delState.forEach( (slide, index) => slide.slideNumber = index + 1)
            return delState
        case 'UPDATE_SLIDE_HEADER':
            let headerUpdatedSlide = state.find(slide => slide.slideNumber === action.payload.slideNumber)
            headerUpdatedSlide.header = action.payload.header
            return state
        case 'UPDATE_SLIDE_CONTENT':
            let contentUpdatedSlide = state.find(slide => slide.slideNumber === action.payload.slideNumber)
            contentUpdatedSlide.content = action.payload.content
            return state
        case 'UPDATE_SLIDE_MEDIA':
            let mediaUpdatedSlide = state.find(slide => slide.slideNumber === action.payload.slideNumber)
            mediaUpdatedSlide.media = action.payload.media
            return state
        case 'UPDATE_SLIDE_LAYOUT':
            let layoutUpdatedSlide = state.find(slide => slide.slideNumber === action.payload.slideNumber)
            layoutUpdatedSlide.layout = action.payload.layout
            return state
        case 'EDIT_SLIDES':
            let editingSlides = action.payload
            editingSlides.forEach( (slide, index) => slide.slideNumber = index + 1)
            return editingSlides
        case 'MOVE_SLIDE':
            // get the dragged slide
            let movedSlide = state.find(slide => slide.slideNumber === action.payload.slideNumber)
            // get the array without the dragged slide
            let movedSlides = state.filter(slide => slide.slideNumber !== action.payload.slideNumber)
            // insert the dragged slide at the proper place
            movedSlides.splice(action.payload.destination - 1, 0, movedSlide)
            movedSlides.forEach( (slide, index) => slide.slideNumber = index + 1)
            return movedSlides
        default:
            return state
    }
}

export default slides