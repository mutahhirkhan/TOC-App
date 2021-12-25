import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Header from "./../Header/Header";
import { connect } from "react-redux";
import { signout } from "./../../Redux/authRedux/authActions";
import cartIcon from "./../../Assests/icons/shopping-cart.svg";
import Cart from "../Cart/Cart";

export const MenuItem = ({ children, to = "#", ...restProps }) => (
    <div>
        <div {...restProps} className="menuItem">
            <Link to={to}>
                <Header style={{ cursor: "pointer", display: "inline" }} fontSize={24} fontWeight="light">
                    {children}
                </Header>
            </Link>
        </div>
    </div>
);

const Navbar = ({ auth, signout }) => {
    const [cartVisibility, setCartVisibility] = useState(false);
    // console.log(auth)
    return (
        <div className="navbar">
            <MenuItem to="/">
                <img src={require("./../../Assests/icons/e-black.png")} className="e-black-logo" />
            </MenuItem>
            <MenuItem to="/categories">SHOP</MenuItem>
            <MenuItem to="/test">TEST</MenuItem>
            {/* <MenuItem >CART</MenuItem> */}
            {auth ? (
                <MenuItem onClick={signout} to="/authentication">
                    LOGOUT
                </MenuItem>
            ) : (
                <MenuItem to="/authentication">LOGIN</MenuItem>
            )}
            <div>
                <Header
                    style={{ cursor: "pointer", display: "inline" }}
                    fontSize={24}
                    fontWeight="bold"
                    onClick={(e) => setCartVisibility(!cartVisibility)}>
                    <img src={cartIcon} className="cartIcon" />
                </Header>
                {cartVisibility ? <Cart /> : null}
            </div>
        </div>
    );
};

var mapState = (state) => ({
    auth: state.auth,
});

var actions = {
    signout,
};

export default connect(mapState, actions)(Navbar);
