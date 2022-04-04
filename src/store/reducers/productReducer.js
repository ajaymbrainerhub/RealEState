const INITIAL_STATE = {
    products: [],
    currProduct: null,
    filterBy: {
        
        minPrice: 1000000,
        maxPrice: 8000000,
        minRooms: 1,
        maxRooms: 8,
        minDistance: 0,
        maxDistance:10000,
        type: ''
    }
}

export function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'LOAD_PRODUCT':
            return {
                ...state,
                currProduct: action.product
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        default:
            return state
    }
}