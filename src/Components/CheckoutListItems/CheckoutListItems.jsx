import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import CloseIcon from '@material-ui/icons/Close';
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "./../../Redux/cart/cartActions";
import "./CheckoutListItems.css";

const CheckoutListItems = ({
  addToCart,
  removeFromCart,
  deleteFromCart,
  ...product
}) => {
  var { title, cost, cartQuantity, CoverPhoto, id } = product;
  // console.log(title, cost, cartQuantity, CoverPhoto, id);
  return (
    <div className="checkout-list-item">
      <div className="checkout-item-product">
        <div className="checkout-item-product-image" style={{ background: `url(${CoverPhoto}) no-repeat center center / 100%` }}></div>
        <Paragraph>{title}</Paragraph>
      </div>
      <div className="checkout-item-quantity center">
        <Button
          onClick={() => (addToCart(product))}
          style={{
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            transform: "translateX(7px)",
            
          }}
          fontWeight="bold"
          background="#fff"
          color="#000"

        >
          +
        </Button>
        <Button fontWeight="bold" background="#fff"
          color="#000" >{cartQuantity}</Button>
        <Button
          onClick={() => removeFromCart(id)}
          style={{
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            transform: "translateX(-7px)",

          }}
          fontWeight="bold"
          background="#fff"
          color="#000"
        >
          -
        </Button>
      </div>
      <div className="checkout-item-price center"><Paragraph fontSize={20} fontWeight="bold">$ {cost}</Paragraph></div>
      {/* <CloseIcon onClick={() => deleteFromCart(id)} style={{ cursor: "pointer" }}/> */}
      <div className="checkout-item-cancellation center"><Paragraph onClick={() => deleteFromCart(id)} style={{ cursor: "pointer" }} fontSize={20} fontWeight="bold">x</Paragraph></div>
      {/* *************************
            <h1>{title} - {cost} - <button onClick={() => deleteFromCart(id)}> X </button></h1>
            <h2><button onClick={() => (addToCart(product))}> + </button> {cartQuantity} <button onClick={() => removeFromCart(id)}> - </button></h2> */}
    </div>
  );
};

var actions = {
  addToCart,
  removeFromCart,
  deleteFromCart,
};

export default connect(null, actions)(CheckoutListItems);
