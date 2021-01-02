import {useSelector, useDispatch} from "react-redux";
import React, {memo, useState, useCallback, useEffect, useMemo} from "react";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {userServices} from "./services";

import {setProducts} from './redux';




export default function App() {
    const {cart, wishlist, products} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
            cart, wishlist, products
        })
    );
    console.log(products);
    const dispatch = useDispatch();


    const {productsService} = userServices();

    const fetchData = useCallback(async () => {
        const data = await productsService.getProducts();
        const product = await data.json();

        dispatch(setProducts(product))
    }, [])

    useEffect(() => {
        fetchData();
    }, [dispatch])

    return (
        <div>
            <Header/>
            <ProductList products={products}/>
        </div>
    );
}