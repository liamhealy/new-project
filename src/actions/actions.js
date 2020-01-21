export function createAccount(account) {
    return {type: "CREATE_ACCOUNT", payload: account}
}

export function toggleDarkMode() {
    return {type: "TOGGLE_DARK_MODE"}
}