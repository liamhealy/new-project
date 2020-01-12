export function signIn(email, password) {
    return {type: "SIGN_IN", payload: { email, password }}
}

export function toggleDarkMode() {
    return {type: "TOGGLE_DARK_MODE"}
}