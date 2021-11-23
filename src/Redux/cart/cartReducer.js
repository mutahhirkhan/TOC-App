import { productAdditionInCart, productDeletionFromCart, productRemovalFromCart } from '../../Utility/products';
import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, DELETE_PRODUCT_FROM_CART } from './cartConstants';

var initialstate = []
var cartReducer = (state = initialstate, action) => {
    var {type, payload} = action
        switch (type) {
            case ADD_TO_CART:
                return productAdditionInCart(state, payload.product)
            case REMOVE_PRODUCT_FROM_CART:
                return productRemovalFromCart(state, payload.productId)
            case DELETE_PRODUCT_FROM_CART:
                return productDeletionFromCart(state, payload.productId)
            default:
                return state;
        }
}

export default cartReducer;