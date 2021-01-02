import React from "react";
import {ProductItem} from "../product-item";
import './ProductList.css'
import {useDispatch, useSelector} from "react-redux";
import {toggleInCart, toggleInWishlist} from '../../redux';

export const ProductList = ({products}) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist);
    const cart = useSelector(({cart: {cart}}) => cart);
    console.log(cart);


    const getToCart = (product) => {
        dispatch(toggleInCart(product))
    };
    const getToWishlist = (product) => {
        dispatch(toggleInWishlist(product))
    };


    return (
        <div className={'items'}>
            {products.map((product) => (
                <ProductItem
                    isAddToWishlist={!!wishlist.find(({id}) => id === product.id)}
                    isAddToCart={!!cart.find(({id}) => id === product.id)}
                    getToCart={getToCart}
                    getToWishlist={getToWishlist}
                    product={product}
                    key={product.id}/>
            ))}
        </div>
    );
}