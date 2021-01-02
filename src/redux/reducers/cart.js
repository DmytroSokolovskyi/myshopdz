import {TO_CART} from "../actions-types";

const initialState = {
    cart: []
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case TO_CART: {
            const updateCart= state.cart.filter(
                (el) => el.id !== action.payload.id);
            if (updateCart.length === state.cart.length) {
                updateCart.push(action.payload);
            }
            return {...state, cart: updateCart};
        }
        default: {
            return state;
        }
    }
}