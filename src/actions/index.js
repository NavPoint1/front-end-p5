import { history } from '../index.js'

const URL = "http://localhost:3000/"

export const login = (user) => {
    return {
        type: "LOGIN",
        payload: user
    }
}

export const logout = () => {
    return {
        type: "LOGOUT",
    }
}

export const createGuide = (guide) => {
    return(dispatch) => {
        fetch(URL + "guides", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(guide)
        })
        .then(res => res.json())
        .then(data => {
            if(data.id) {
                // store guide in state
                dispatch({
                    type: "CREATE_GUIDE",
                    payload: data
                })
                // redirect to show page with history
                history.push("/guides/" + data.id)
            }
            else {
                // print error message
                dispatch({
                    type: "ERROR",
                    payload: data
                })
            }
        })
    }
}

export const loadGuide = (guideId) => {
    return(dispatch) => {
        fetch(URL + "guides/" + guideId)
        .then(res => res.json())
        .then(data => {
            if(data.id) {
                // store guide in state
                dispatch({
                    type: "LOAD_GUIDE",
                    payload: data
                })
            }
            else {
                // print error message
                dispatch({
                    type: "ERROR",
                    payload: data
                })
            }
        })
    }
}

export const clearGuide = () => {
    return {
        type: "CLEAR_GUIDE",
    }
}

export const createSlide = (newSlide) => {
    return {
        type: "CREATE_SLIDE",
        payload: newSlide
    }
}

export const deleteSlide = (slideNumber) => {
    return {
        type: "DELETE_SLIDE",
        payload: slideNumber
    }
}

export const updateSlideHeader = (slide) => {
    return {
        type: "UPDATE_SLIDE_HEADER",
        payload: slide
    }
}

export const updateSlideContent = (slide) => {
    return {
        type: "UPDATE_SLIDE_CONTENT",
        payload: slide
    }
}

export const updateSlideMedia = (slide) => {
    return {
        type: "UPDATE_SLIDE_MEDIA",
        payload: slide
    }
}

export const setCurrentSlide = (slide) => {
    return {
        type: "SET_CURRENT_SLIDE_INDEX",
        payload: slide
    }
}

export const clearGuides = () => {
    return {
        type: "CLEAR_GUIDES",
    }
}

export const loadGuides = () => {
    return(dispatch) => {
        fetch(URL + "guides/")
            .then(res => res.json())
            .then(data => {
                if(data.length) {
                    // store guides in state
                    dispatch({
                        type: "LOAD_GUIDES",
                        payload: data
                    })
                }
                else {
                    // print error message
                    dispatch({
                        type: "ERROR",
                        payload: data
                    })
                }
            })
    }
}

// export const saveSlide = (slide) => {
//     return(dispatch) => {
//         fetch(URL + "slides", {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(slide)
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.id) {
//                 // store slide in state to render in preview
//                 dispatch({
//                     type: "SAVE_SLIDE",
//                     payload: data
//                 })
//             }
//             else {
//                 // print error message
//                 dispatch({
//                     type: "ERROR",
//                     payload: data
//                 })
//             }
//         })
//     }
// }