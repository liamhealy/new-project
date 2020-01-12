const defaultState = {
    user: {
        email: null,
        password: null,
        signedIn: false
    },
    interface: {
        darkMode: false
    }
}

function reducer(prevState = defaultState, action) {
    switch(action.type) {
        case "SIGN_IN":
            return {...prevState, user: { email: action.payload.email, password: action.payload.password, signedIn: true }}
        case "TOGGLE_DARK_MODE":
            return {...prevState, interface: { darkMode: !prevState.darkMode }}
        default:
            return prevState
    }
}

export default reducer