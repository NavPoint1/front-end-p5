const slides = (state = [], action) => {
    switch(action.type) {
        case 'LOGOUT':
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
        default:
            return state
    }
}

export default slides