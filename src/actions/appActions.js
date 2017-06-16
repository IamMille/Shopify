
export function appNavigate(payload)
{
    return {
        type: "VIEW_CHANGE",
        payload
    }
}

export function appUserLogin(payload) {
    return {
        type: "USER_LOGIN",
        payload
    }
}

export function appUserLogout() {
    return {
        type: "USER_LOGOUT"
    }
}

export function appHistoryAdd(payload) {
    return {
        type: "HISTORY_ADD",
        payload
    }
}