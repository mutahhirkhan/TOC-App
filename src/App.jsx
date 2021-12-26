import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Category from "./Pages/Category/Category";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
import Checkout from "./Pages/Checkout/Checkout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { authListener } from "./Redux/authRedux/authActions";
import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/Product/Product";

var App = ({ authListener }) => {
    useEffect(() => {
        authListener();
    }, [authListener]);
    return (
        <div>
            <Navbar />
            <Switch>
                <div className="pagesContainer">
                    <Route exact path="/" component={Home} />
                    <Route path="/authentication" component={Authentication} />
                    <Route path="/categories" component={Category} />
                    <Route path="/category-products/:category" component={CategoryProducts} />
                    <Route path="/product/:productId" component={Product} />
                    <Route path="/checkout/:orderId" component={Checkout} />{" "}
                    {/*// ye routing orderAction.js se hogi q k orderid wahan generate horhi he//*/}
                    <Route path="/test" component={Test} />
                </div>
            </Switch>
        </div>
    );
};

var actions = {
    authListener,
};

export default connect(null, actions)(App);
