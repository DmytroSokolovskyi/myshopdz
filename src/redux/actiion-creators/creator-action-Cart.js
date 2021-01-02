import {TO_CART} from '../actions-types'


export const toggleInCart = (product) => ({type: TO_CART, payload: product});