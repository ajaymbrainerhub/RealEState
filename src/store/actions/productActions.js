import { productService } from '../../services/productService';


export const loadProducts = (filterBy = {}) => dispatch => {
    try {
        const products = productService.getProducts(filterBy)
        console.log({ products });
        dispatch({ type: 'SET_FILTER', filterBy })
        dispatch({ type: 'LOAD_PRODUCTS', products })
    } catch (err) {
        console.log(err);
    }
}

export const loadProduct = (id) => dispatch => {
    try {
        const product = productService.getById(id)
        dispatch({ type: 'LOAD_PRODUCT', product })
    } catch (err) {
        console.log(err);
    }
}


export const setFilter = (filterBy) => dispatch => {
    dispatch({ type: 'SET_FILTER', filterBy })
}








