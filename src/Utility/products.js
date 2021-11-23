export var categorizeProducts = (productsArr) => {
  var categories = [];
  var categoryName;
  var isCategoryExist;
  var newCategory;
  //loop over products
  for (var product of productsArr) {
    categoryName = product.category;
    //loop over category array
    isCategoryExist = categories.some(
      (categoryObj) => categoryObj.category === categoryName
    );
    if (isCategoryExist) {
      //if category exist (yes)
      //push product in products field in categoryObj
      categories = categories.map((categoryObj) => {
        if (categoryObj.category === categoryName) {
          categoryObj.products.push(product);
          return categoryObj;
        } else {
          return categoryObj;
        }
      });
    } else {
      //if cateogry doesn't exist (no)
      newCategory = {
        category: product.category,
        products: [product],
      };
      categories.push(newCategory);
    }
  }
  return categories;
};


export var productAdditionInCart = (existingProducts, incomingProduct) => {
  var exist = existingProducts.some(existingProduct => existingProduct.id === incomingProduct.id)
  if (!exist) {
    console.log([...existingProducts, { ...incomingProduct, cartQuantity: 1 }])
    return [...existingProducts, { ...incomingProduct, cartQuantity: 1 }]
  }
  else {
    console.log(incomingProduct)
    return existingProducts.map((existingProduct) => {
      console.log(existingProduct.cartQuantity === incomingProduct.cartQuantity)
      if (existingProduct.id === incomingProduct.id) {
        return {
          ...existingProduct,
          cartQuantity: existingProduct.cartQuantity + 1
        }
      } else return existingProduct
    })
  }
}


export var productRemovalFromCart = (existingProducts, productId) => {
  var exist = existingProducts.find(existingProduct => existingProduct.id === productId)
  console.log(existingProducts, productId)
  //check for undefined
  if (exist) {
    //check if product is not present in cart array
    if (exist.cartQuantity > 0) {
      //modifying cartQuantity on id basis
      return existingProducts.map((existingProduct) => {
        if (existingProduct.id === productId) {
          return {
            ...existingProduct,
            cartQuantity: existingProduct.cartQuantity - 1
          }
        }
        //if not found then return the product
        else
          return existingProduct
      })
    }
    //when cartQuantity is zero then remove from cart array
    else if (exist.cartQuantity === 0) {
      console.log('else if')
      return existingProducts.filter(existingProduct => existingProduct.id !== productId);
    }
    // return the previous state
  } else
      return existingProducts

}

export var productDeletionFromCart = (existingProducts, productId) => {
  var exist = existingProducts.find(existingProduct => existingProduct.id === productId)
  if(exist) 
    return existingProducts.filter(existingProduct => existingProduct.id !== productId);
  else 
      return existingProducts
}