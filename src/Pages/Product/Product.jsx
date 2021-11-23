import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../Components/ProductCard/ProductCard';
import { fetchParticularProduct } from '../../Redux/product/productActions';

const Product = ({ fetchParticularProduct, match: { params: { productId } } }) => {
    const [product, setproduct] = useState({})
    useEffect(async() => {
        //CDM
        // console.log( await fetchParticularProduct(productId))
        // var productData = await fetchParticularProduct(productId)
        // setproduct(productData);
        setproduct( await fetchParticularProduct(productId))
    }, [])
    return (
        <div>
            <h1>product page</h1>
            {product.title && <ProductCard key={product.id} {...product} />}
        </div>
    )
}

var actions = {
    fetchParticularProduct
}

export default connect(null, actions)(Product)
