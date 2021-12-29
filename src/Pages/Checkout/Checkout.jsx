import React, { useState } from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { totalAmount } from '../../Utility/checkout';
import { connect } from 'react-redux';
import OrderForm from '../../Components/OrderForm/OrderForm';
import "./Checkout.css"
import Header from './../../Components/Header/Header';
import Button from './../../Components/Button/Button';
import { openModal } from './../../Redux/modal/modalActions';
import { withRouter } from 'react-router';

const Checkout = ({ total, openModal, orderId }) => {
    // console.log(orderId)
    const [shipFormShown, setshipFormShown] = useState(false)
    return (
        <div className="checkout-page-container">
            <div className="checkout">
                {/* <h1>Checkout Page</h1> */}
                <Header fontWeight="bold" fontSize={35} color='#fff'>Shopping Cart</Header>
                <CheckoutList />
                <div className="checkout-bottom-content">
                    <Header fontSize={24} fontWeight="semi-bold" color='#fff'>Amount To Pay: &nbsp; <b>{`$${total}`}</b></Header>
                    <Button
                        onClick={() =>
                            openModal({ modalType: "addressFormModal", modalProps: { orderId } })
                        }
                        style={{
                            justifySelf: "end", background: 'rgb(0,0,0,0.5)',borderRadius:'15px',
                            cursor: 'pointer'
                        }}>
                        Proceed & Pay</Button>
                </div>
                {/* <h3>Total Amount {`$${total}`}</h3> */}
                {/* <button onClick={() => setshipFormShown(!shipFormShown)}>PROCEDD & PAY </button> --{total} */}
                {/* {shipFormShown && < OrderForm/>} */}
            </div>
        </div>
    )
}

var mapState = (state, ownProps) => ({
    orderId: ownProps.match.params.orderId,
    total: totalAmount(state.cart)
})

var actions = {
    openModal
}
export default connect(mapState, actions)(withRouter(Checkout))
