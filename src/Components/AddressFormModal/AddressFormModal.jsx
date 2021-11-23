import React, { useState } from "react";
import Header from "../Header/Header";
import ModalContainer from "../ModalContainer/ModalContainer";
import "./AddressFormModal.css";
import { TextField } from "@material-ui/core";
import Button from "./../Button/Button";
// import { connect } from 'react-redux';
import { processOrder } from "./../../Redux/order/orderActions";
import { connect } from 'react-redux';
// 
const AddressFormModal = ({processOrder, cart, orderId}) => {
  // orderId ye order Id withRouter ki madad se Checkout.jsx se nikali he, q k ye 
  // addressForm aik modal he aur modal app k bhi upper laga hoa he uspe Route ya switch ya withRouter 
  // kuch kaam nhi karega isliye parent se pass karai he modalProps me

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [phone, setPhone] = useState("");

  var handleSubmit = (e) => {
      e.preventDefault()
      var addressInfo = {
          fullName,
          fullAddress,
          email,
          phone 
      }
      if (fullName && fullAddress && email && phone) {
          console.log(addressInfo, orderId, cart)
          processOrder({cart, orderId, addressInfo})
      }
      else alert("Please Fill out all the Fields ")
      //   var addressFieldsDiv = document.querySelector(".address-fields")
      // console.log(addressFieldsDiv.childNodes)
  }
  return (
    <ModalContainer>
      <form onSubmit={handleSubmit} className="address-from-modal center">
        <Header>Address Entries Here</Header>
        <div className="address-fields">
          <div>
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="full-name"
              label="Full Name"
            ></TextField>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="email"
              label="Email"
            ></TextField>
          </div>
          <div>
            <TextField
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="full-address"
              label="Full Address"
            ></TextField>
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="phone"
              label="Phone No."
            ></TextField>
          </div>
        </div>

        <Button type="submit" style={{ marginTop: "2em", width: "40%" }}>
          Pay Now!
        </Button>
      </form>
    </ModalContainer>
  );
};

var mapState = (state) => ({
  cart: state.cart
})

var actions = {
  processOrder
}

export default connect(mapState, actions)(AddressFormModal);
