import { CLEAR_PRODUCTS, SET_PRODUCT } from './productConstants';

var initalState = []

var productReducer = (state = initalState, action) => {
    var { type, payload } = action;
    switch (type) {
        case SET_PRODUCT:
            return [...payload.products]
        case CLEAR_PRODUCTS:
            return []
        default:
            return state
    }

}

export default productReducer;