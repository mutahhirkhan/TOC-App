import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Header from "./../Header/Header";
import { connect } from 'react-redux';
import { signout } from './../../Redux/authRedux/authActions';
import Cart from "../Cart/Cart";

export const MenuItem = ({ children, to="#", ...restProps }) => (
  <div>
    <div {...restProps} className="menuItem">
      <Link  to={to}>
        <Header
          style={{ cursor: "pointer", display: "inline" }}
          fontSize={24}
          fontWeight="bold"
        >
          {children}
        </Header>
      </Link>
    </div>
  </div>
);

const Navbar = ({auth, signout}) => {
  const [cartVisibility, setCartVisibility] = useState(false)
  // console.log(auth)
  return (
    <div className="navbar">
      <MenuItem to="/">HOME</MenuItem>
      <MenuItem to="/categories">SHOP</MenuItem>
      <MenuItem to="/test">TEST</MenuItem>
      {/* <MenuItem >CART</MenuItem> */}
      <div>
        <Header
          style={{ cursor: "pointer", display: "inline" }}
          fontSize={24}
          fontWeight="bold"
          onClick={(e) =>  setCartVisibility(!cartVisibility)}
        >CART
        </Header>
          {cartVisibility ? <Cart/> : null} 
      </div>
      {auth ? <MenuItem onClick={signout} to="authentication">LOGOUT</MenuItem> :<MenuItem  to="authentication">LOGIN</MenuItem>}
    </div>
  );
};

var mapState =(state) => ({
  auth: state.auth
})

var actions  = {
  signout
}

export default connect(mapState, actions)(Navbar);
