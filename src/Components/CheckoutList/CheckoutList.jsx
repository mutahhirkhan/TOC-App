import React from 'react'
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { MenuItem } from '../Navbar/Navbar';
import Paragraph from '../Paragraph/Paragraph';
import CheckoutListItems from './../CheckoutListItems/CheckoutListItems';
import cartIcon from "./../../Assests/icons/shopping-cart.svg"
import "./CheckoutList.css"
import { Link } from 'react-router-dom';

const CheckoutList = ({ cartItems }) => {
    // console.log(cartItems)
    return (
        <div className="checkout-list">
            {/* <h1>cart list </h1> */}
            <div className="checkout-list-item ">
                <Paragraph color='#fff' fontSize={18}>Product</Paragraph>
                <Paragraph color='#fff' fontSize={18}>Quantity</Paragraph>
                <Paragraph color='#fff' fontSize={18}>Price of Each</Paragraph>
            </div>
            {cartItems.length > 0
                ?
                cartItems.map(item => <CheckoutListItems key={item.id} {...item} />)
                :
                <div className="center" style={{ display: "flex", gap: "2em", justifyContent: "flex-end" }}>
                    <Header>Your Bucket is Empty, would like to Fill it up ? click the Bucket </Header>
                    <MenuItem to="/categories"><img src={cartIcon} alt="cartIcon" height={30} /></MenuItem>
                </div>
            }
        </div>
    )
}
var mapState = (state) => ({
    cartItems: state.cart
})

export default connect(mapState, null)(CheckoutList)
