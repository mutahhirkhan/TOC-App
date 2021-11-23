import React from 'react'
import CartList from '../CartList/CartList';
import Checkout from '../../Pages/Checkout/Checkout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateOrder } from '../../Redux/order/orderActions';
import "./Cart.css";
import Header from './../Header/Header';
import Button from './../Button/Button';


const Cart = ({ generateOrder, cart }) => {
    return (
        <div className="cart">
            {/* <h1>cart</h1> */}
            <Header fontSize={22} style={{letterSpacing: "5px"}}>CART</Header>
            <CartList />
            {/* <button onClick={generateOrder}>CHECK OUT</button> */}
            <Button onClick={generateOrder} disabled={cart.length > 0 ? false : true} fontSize={18}  style={{letterSpacing:"3px", width:"80%"}}>CHECKOUT</Button>
        </div>
    )
}

var actions = {
    generateOrder
}

var mapState = (state) => ({
    cart: state.cart
})

export default connect(mapState, actions)(Cart)


