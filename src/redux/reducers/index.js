import {combineReducers} from "redux";
import cart from './cart';
import products from './products';
import wishlist from './wishlist';



export const reducer = combineReducers({
    cart,
    wishlist,
    products,
})