import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import { fetchProducts } from '../../Redux/product/productActions';
import { categorizeProducts } from '../../Utility/products';
import "./CategoryList.css"

const CategoryList = ({fetchProducts, categories}) => {
    // console.log(categories)
    useEffect(() => {
        console.log('CDM')
        fetchProducts()        
    }, [])
    return (
        <div className="category-list">
            {/* <h1>category List</h1> */}
            {/* //spread the object here as soul pair */}
            {categories.map(category => <CategoryListItem key={category.category} {...category}/>)} 
        </div>
    )
}

var actions = {
    fetchProducts 
}
var mapState = (state) => ({
    categories: categorizeProducts(state.products)
})

export default connect(mapState, actions)(CategoryList)
