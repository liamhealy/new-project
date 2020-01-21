const defaultState = {
    user: {
        email: null,
        first_name: null,
        last_name: null,
        password: null,
        signedIn: false
    },
    interface: {
        darkMode: false
    }
}

function reducer(prevState = defaultState, action) {
    switch(action.type) {
        case "CREATE_ACCOUNT":
            return {
                ...prevState,
                user: { 
                    email: action.payload.email,
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    password: action.payload.password,
                    signedIn: true 
                }
            }
        case "TOGGLE_DARK_MODE":
            return {
                ...prevState, 
                interface: { 
                    darkMode: !prevState.darkMode 
                }
            }
        default:
            return prevState
    }
}

export default reducer