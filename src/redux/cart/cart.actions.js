import { cartActionTypes } from "./cart.types";

// action to toggle cart dropdown
export const toggleCartHidden = () => {
    return({
        type: cartActionTypes.TOGGLE_CART_HIDDEN
    });
}

// action to add item
export const addItem = (item) => {
    return({
        type: cartActionTypes.ADD_ITEM,
        payload: item
    });
}

// action to remove cart item
export const clearItemFromCart = (item) => {
    return({
        type: cartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    })
}

// action to reduce/remove cart item quantity
export const removeItem = (item) => {
    return({
        type: cartActionTypes.REMOVE_ITEM,
        payload: item
    })
}

// clear cart
export const clearCart = () => {
    return({
        type: cartActionTypes.CLEAR_CART
    });
}