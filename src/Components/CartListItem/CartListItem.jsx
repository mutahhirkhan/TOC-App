import React from 'react'
import { connect } from 'react-redux';
import Paragraph from '../Paragraph/Paragraph';
import Header from './../Header/Header';
import { addToCart, deleteFromCart, removeFromCart } from './../../Redux/cart/cartActions';
import "./CartListItem.css"

const CartListItem = ({ addToCart, removeFromCart, deleteFromCart, ...product }) => {
    var { title, cost, cartQuantity, id, CoverPhoto } = product
    return (
        <div className="cart-list-item ">
            {/* image style sequence -->  url bg-color |  bg-image-repeat | bg-image-position | bg-image-size */}
            <div style={{background:`url(${CoverPhoto}) no-repeat center center / 100%`}}className="cart-list-item-img"></div>
            <div className="cart-list-item-desc">
                <Header style={{letterSpacing:"2px"}}>{title}</Header>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <Paragraph>${cost} x {cartQuantity}&nbsp;</Paragraph>
                <Paragraph style={{float:"right"}} fontWeight="bold"> = &nbsp;${cost * cartQuantity}</Paragraph>
                </div>
            </div>

            {/* *************************
            <h1>{title} - {cost} - <button onClick={() => deleteFromCart(id)}> X </button></h1>
            <h2><button onClick={() => (addToCart(product))}> + </button> {cartQuantity} <button onClick={() => removeFromCart(id)}> - </button></h2> */}
        </div>
    )
}

var actions = {
    addToCart,
    removeFromCart,
    deleteFromCart,
}

export default connect(null, actions)(CartListItem)
