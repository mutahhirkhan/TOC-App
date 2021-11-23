import { useEffect, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./Pages/Home/Home";
// import Authentication from "./Pages/Authentication/Authentication";
// import Category from "./Pages/Category/Category";
// import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
// import Checkout from "./Pages/Checkout/Checkout";
// import Product from "./Pages/Product/Product";
// import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
import { connect } from "react-redux";
import { authListener } from "./Redux/authRedux/authActions";
 
var Home = lazy(() => import("./Pages/Home/Home")); //dynamic import 
var Authentication = lazy(() => import("./Pages/Authentication/Authentication"));//dynamic import
var Category = lazy(() => import("./Pages/Category/Category"));//dynamic import
var CategoryProducts = lazy(() => import("./Pages/CategoryProducts/CategoryProducts"));//dynamic import
var Checkout = lazy(() => import("./Pages/Checkout/Checkout"));//dynamic import
var Product = lazy(() => import("./Pages/Product/Product"));//dynamic import
var Test = lazy(() => import("./Pages/Test/Test"));//dynamic import

var CodeSplittedApp = ({ authListener }) => {
  useEffect(() => {
    authListener();
  }, [authListener]);
  return (
    <div>
      <Navbar />
      <Switch>
        <div className="pagesContainer">
          <Suspense fallback={<div>Loading....</div>}>
            <Route exact path="/" component={Home} />

            <Route path="/authentication" component={Authentication} />
            <Route path="/categories" component={Category} />
            <Route path="/category-products/:category"component={CategoryProducts}/>
            <Route path="/product/:productId" component={Product} />
            <Route path="/checkout/:orderId" component={Checkout} />{" "}
            {/*// ye routing orderAction.js se hogi q k orderid wahan generate horhi he//*/}
            <Route path="/test" component={Test} />
          </Suspense>
        </div>
      </Switch>
    </div>
  );
};

var actions = {
  authListener,
};

export default connect(null, actions)(CodeSplittedApp);
