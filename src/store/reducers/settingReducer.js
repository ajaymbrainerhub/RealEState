const INITIAL_STATE = {
    isHomePage: false
}

export function settingReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_IS_HOME_PAGE':
            return {
                ...state,
                isHomePage: action.isHomePage
            }
        default:
            return state
    }
}