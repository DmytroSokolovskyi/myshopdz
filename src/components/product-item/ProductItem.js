import React from "react";
import './ProductItem.css';

export const ProductItem = ({product, getToCart, getToWishlist, isAddToWishlist, isAddToCart}) => {


    return (
<div className={'myitem'}>
    <img src={product.image} alt="1"/>
    <div>{product.price}</div>
    <button  className={isAddToCart ?  "red" : "green" } onClick={() => getToCart(product)}>{isAddToCart ? "OFF" : "CART"}</button>
    <button className={isAddToWishlist ? "red" : "green" } onClick={() => getToWishlist(product)}>{isAddToWishlist ? "DELL" : "WISHLIST"}</button>
    <div>{product.title}</div>
</div>
    );
}