const INITIAL_STATE = {
    users: [],
    currUser: null,
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'LOAD_USER':
            return {
                ...state,
                currUser: action.user
            }

        default:
            return state
    }
}