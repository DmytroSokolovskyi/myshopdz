import React, {memo, useMemo} from "react";
import {header} from './Header.css'
import {useSelector} from "react-redux";

export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({cart, wishlist}));



    const Cart = memo(() => {
        console.log('Price Cart');
        const pricecart = cart.reduce((sum, current) => sum + current.price, 0);
        return <div title={pricecart}> cart: {cart.length}</div>
    },[]);

    const Wishlist = () => {
        let priceWishlist = wishlist.reduce((sum, current) => sum + current.price, 0);
        return <div title={priceWishlist}> wishlist: {wishlist.length}</div>
    };


    return (
        <header>
            <h2>My shop</h2>
            <div>
                <Cart/>
                <Wishlist/>
            </div>
        </header>
    );
}