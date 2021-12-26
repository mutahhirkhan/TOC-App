import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./CategoryListItem.css";
import ProductCardV2 from "./../ProductCardV2/ProductCardV2";

const CategoryListItem = ({ category, products }) => {
    return (
        <div className="category-list-item">
            <h1 className="category-name">
                {console.log(category)}
                <Link className="category-name-link" to={`category-products/${category}`}>
                    {category}
                </Link>
            </h1>
            {products.map((product, index) => (
                <>{index < 3 && <ProductCardV2 key={product.title} {...product} />}</>
            ))}
            {/* <Link to={`category-products/${category}`}> */}
            {/* <button>VIEW MORE</button> */}
            {/* </Link> <br></br>    */}
            {/* ----------------------------------------- */}
        </div>
    );
};

export default CategoryListItem;
