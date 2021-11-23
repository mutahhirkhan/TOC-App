import React from 'react'
import { connect } from 'react-redux';
import { addToCart} from './../../Redux/cart/cartActions';
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import "./ProductCard.css"
import Button from './../Button/Button';

const ProductCard = ({ addToCart, removeFromCart, deleteFromCart, ...product }) => {
    var { title, cost, id, CoverPhoto} = product
    return (
        <div >
            <div className="product_card center">       
            {/* <h3> <Link to={`/product/${id}`}>{title}</Link> - {`$${cost}`} <button onClick={() => addToCart(product)}>ADD TO CART</button> </h3> */}
            
            <div className="product_card_hover center">
                <Button onClick={() => addToCart(product)} fontSize={10} fontWeight="regular">ADD TO CART</Button>
            </div>

            <div style={{background: `url(${CoverPhoto})`, backgroundSize: "100% 100%, cover", backgroundRepeat: "no-repeat" }} className="product_card_image"></div>
            <Header style={{alignSelf: "flex-start"}} fontSize={15} fontWeight="bold" >{title}</Header>
            <Header style={{alignSelf: "flex-start"}} fontSize={14} fontWeight="regular">${cost}</Header>
            </div>
        </div>
    )
}

var actions = {
    addToCart,
}

export default connect(null, actions)(ProductCard)
