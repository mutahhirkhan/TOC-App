import { combineReducers } from "redux";
import authReducer from './authRedux/authReducer';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';
import modalReducer from './modal/modalReducer';
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage" //default to localStorage to web
// import sessionStorage from "redux-persist/lib/storage/session" //default to sessionStorage to web

const persistConfig = {
    key: "root", //at what level we need this persist (we can also separately config the states)
    storage, //the type of storage we are gonna use
    whiteList: ['auth'] //these are the state which we have to persist
}

var rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    modal: modalReducer
})


export default persistReducer(persistConfig, rootReducer)