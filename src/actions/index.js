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