import {TO_WISHLIST} from '../actions-types'

const initialState = {
    wishlist: []
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case TO_WISHLIST: {
            const updateWichlist = state.wishlist.filter(
                (el) => el.id !== action.payload.id);
            if (updateWichlist.length === state.wishlist.length) {
                updateWichlist.push(action.payload);
            }
            return {...state, wishlist: updateWichlist};
        }
        default: {
            return state;
        }
    }
}