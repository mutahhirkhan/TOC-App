export var totalAmount = (cart) => {
    return cart.reduce((total, item) => { return total + (item.cost * item.cartQuantity) }, 0)
};