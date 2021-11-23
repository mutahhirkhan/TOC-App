import React from 'react'
import CartListItem from '../CartListItem/CartListItem';
import { connect } from 'react-redux';
import "./CartList.css";
import cartIcon from "./../../Assests/icons/shopping-cart.svg"
import Paragraph from '../Paragraph/Paragraph';
import Header from './../Header/Header';
import { MenuItem } from './../Navbar/Navbar';

const CartList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className="cart-list">
            {/* <h1>cart list </h1> */}
            {cartItems.length > 0 
            ?
            cartItems.map(item => <CartListItem key={item.id} {...item}/>)
            :
            <div className="center" style={{display:"flex", gap:"2em"}}>
                <Header>Your Bucket is Empty, would like to Fill it up ? click the Bucket </Header>
                <MenuItem to="/categories"><img src={cartIcon} alt="cartIcon" height={30}  /></MenuItem>
            </div> 
            }
            {/* {cartItems.map(item => <CartListItem key={item.id} {...item}/>)} */}
           
        </div>
    )
}
var mapState = (state) => ({
    cartItems: state.cart
})

export default  connect(mapState, null)(CartList)
