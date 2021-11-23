import { firestore, serverTimestamp, storage } from './../../Firebase/Firebase';
import { v4 as uuid } from 'uuid'
import { uploadImages } from '../../Utility/Utility';
import { CLEAR_PRODUCTS, SET_PRODUCT } from './productConstants';


export var uploadProduct = (productObj) => async () => {
    try {
        // console.log(productObj)
        //1 - send file t storage and get diwnloadable url
        var imageRef = storage.child(`prducts/img-${uuid()}`)
        var fileListener = imageRef.put(productObj.CoverPhoto)
        //FileListener.on()
        //event_type
        //cb - tells the progress
        //cb - tells the error
        //cb - on completion give the URL
        fileListener.on(
            "state_changed",
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error)
            },
            async () => {
                var downloadURL = await imageRef.getDownloadURL()
                console.log(downloadURL)
                //2 - modify productObj with coverPhoto url and createdAt
                productObj.CoverPhoto = downloadURL
                productObj.createdAt = serverTimestamp()
                productObj.cost = parseFloat(productObj.cost)
                productObj.quantity = parseInt(productObj.quantity)
                console.log(productObj)

                //3 - create document in firestore
                await firestore.collection("products").add(productObj)
            }
        )
    } catch (error) {
        console.log(error)
    }
}

//saqlain algo categorized product
/*
var categorizedProducts = (productsArr) => {
    var readyProducts = {
        //Caps: [p1,p2,p3,...]
        //shirt: [p1,p2,p3,p4,...]
    }
    productsArr.forEach(item => {
        if(readyProducts[item.category]) {
            readyProducts[item.category].push(item) 
        }
        else{
            readyProducts[item.category] = [];
            readyProducts[item.category].push(item)
        }
        
    });
    
    return readyProducts
}
*/


export var fetchProducts = () => async (dispatch) => {
    try {
        var query = await firestore.collection("products").get()
        var products = []
        query.docs.forEach((doc) => {
            products.push({...doc.data(), id: doc.id})
        })
        // console.log(products)
        dispatch({
            type: SET_PRODUCT,
            payload: {
                products //array
            }
        })
    } catch (error) {
        console.log(error)
    }
}


export var fetchCategoryProducts = (category) => async (dispatch) => {
    try {
        console.log(category)
        var query = await firestore.collection("products").where("category","==",category).get()
        var products = []
        query.docs.forEach((doc) => {
            products.push({...doc.data(), id: doc.id})
        })
        dispatch({
            type: SET_PRODUCT,
            payload: {
                products //array
            }
        })
    } catch (error) {
        console.log(error)

    }
}

export var clearProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: CLEAR_PRODUCTS,
        })
    } catch (error) {
        console.log(error)
        
    }
}

//  used in product.js page
export var fetchParticularProduct = (productId) => async (dispatch) => {
    try {
        var query = firestore.collection("products").doc(productId).get()
        var product = (await query).data()
        return  product
    } catch (error) {
        console.log(error)
    }
}