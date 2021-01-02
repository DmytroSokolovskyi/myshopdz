import {TO_WISHLIST} from "../actions-types";


export const toggleInWishlist = (product) => ({type: TO_WISHLIST, payload: product});