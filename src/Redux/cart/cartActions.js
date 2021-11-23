import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, DELETE_PRODUCT_FROM_CART } from './cartConstants';

export var addToCart = (product) => async (dispatch) => {
    try {
        // console.log(product)
        dispatch({
            type: ADD_TO_CART,
            payload: {
                product
            }
        })
    } catch (error) {
        console.log(error)
    }
}


export var removeFromCart = (productId) => async (dispatch) => {
    try {
        console.log(productId)

        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: {
                productId,
            }
        })
    } catch (error) {
        console.log(error)

    }
}


export var deleteFromCart = (productId) => async (dispatch) => {
    try {
        console.log(productId)
        dispatch({
            type: DELETE_PRODUCT_FROM_CART,
            payload: {
                productId,
            }
        })
    } catch (error) {
        console.log(error)
    }
}