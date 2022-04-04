const INITIAL_STATE = {
    isChatOpen:false,
}

export function chatReducer(state =INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_CHAT_VALUE':
            return {
                ...state,
                isChatOpen: action.data
            }
        default:
            return state
    }
}