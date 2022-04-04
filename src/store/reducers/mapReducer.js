const INITIAL_STATE = {
    maps:{},

}

export function mapReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_MAP_DATA':
            return {
                ...state,
                maps: action.data
            }
            
       
            case 'REMOVE_MAP_DATA':
                return {
                    ...state,
                    maps: action.data
                }
        default:
            return state
    }
}