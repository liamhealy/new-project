const defaultState = {
    signedIn: false,
    darkMode: false
}

function reducer(prevState = defaultState, action) {
    switch(action.type) {
        case "SIGN_IN":
            return {...prevState, signedIn: true}
        case "TOGGLE_DARK_MODE":
            return {...prevState, darkMode: !prevState.darkMode}
        default:
            return prevState
    }
}

export default reducer