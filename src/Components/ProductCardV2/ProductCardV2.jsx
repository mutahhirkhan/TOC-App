import React from "react";
import Header from "../Header/Header";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
// import ArrowRightIcon from "@material-ui/icons/ArrowRightIcon";
import Button from "./../Button/Button";
import "./ProductCardV2.css";
import Paragraph from "../Paragraph/Paragraph";
import { connect } from "react-redux";
import { addToCart } from "./../../Redux/cart/cartActions";

const AvailableItemHeading = ({ isAvailable, text }) => {
    return (
        <Paragraph style={{ color: `${isAvailable ? "green" : "red"}` }} fontSize={10} fontWeight="medium">
            {text}
        </Paragraph>
    );
};

const ProductCardV2 = ({ addToCart, removeFromCart, deleteFromCart, ...product }) => {
    console.log(product);

    var { title, cost, id, CoverPhoto, quantity, description, category } = product;

    const truncateText = (str, n = 43) => (str.length > n ? str.substr(0, n - 1) + "..." : str);

    const availableItems = (quantity) =>
        quantity > 0 ? (
            <AvailableItemHeading isAvailable={true} text={`${quantity} Available`} />
        ) : (
            <AvailableItemHeading isAvailable={false} text="Out Of Stock" />
        );

    return (
        <div className="product_card_v2">
            <div className="product_card center">
                <div
                    style={{
                        // background: `url(${require("./../../Assests/image/instra1.png")})`,
                        background: `url(${CoverPhoto})`,
                        backgroundSize: "100% 100%, cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="product_card_image"></div>
                <Header style={{ alignSelf: "flex-start", textTransform: "capitalize" }} fontSize={11} fontWeight="light">
                    Category - {category}
                </Header>

                <Header style={{ alignSelf: "flex-start", textTransform: "capitalize" }} fontSize={30} fontWeight="medium">
                    {truncateText(title, 15) }
                    {/* best men */}
                </Header>
                <Header style={{ alignSelf: "flex-start" }} fontSize={15} fontWeight="medium">
                    <div className="flex">
                        <ArrowRightIcon style={{ display: "flex", alignSelf: "baseline" }} />
                        {truncateText(description)}
                    </div>
                </Header>

                <div className="flex quantity-of-item">Quantity: {availableItems(quantity)}</div>

                <div className="add-to-cart-prics">
                    {/* <div className="price-tag flex"> */}
                    <Header classname="price-tag" fontSize={12} fontWeight="regular">
                        ${cost}
                        {/* $400 */}
                    </Header>
                    {/* </div> */}
                    <Button classname="add-to-cart-button" onClick={() => addToCart(product)} fontSize={10} fontWeight="regular">
                        ADD TO CART
                    </Button>
                </div>
            </div>
        </div>
    );
};

var actions = {
    addToCart,
};

export default connect(null, actions)(ProductCardV2);
