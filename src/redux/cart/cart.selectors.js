import { createSelector } from "reselect";

// input selector
const selectCart = (state) => {
    return(state.cart)
}

// output selector for cart Items
export const selectCartItems = createSelector([selectCart], (cart) => {
    return(cart.cartItems);
})  

// select cart hidden output selector
export const selectCartHidden = createSelector([selectCart], (cart) => {
    return(cart.hidden);
})

// output selector for cartItemsCount
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
    return(
        // return reduce value of all quantities in the cartItems
        cartItems.reduce((accumulatedQuantity, cartItem) => {
            return(accumulatedQuantity + cartItem.quantity)
        }, 0)
    )
})

// output selector for cartTotal cost
export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
    return(
        // return reduce value for total cost of the cart items
        cartItems.reduce((accumulatedQuantity, cartItem) => {
            return(accumulatedQuantity + (cartItem.quantity * cartItem.price))
        }, 0)
    )
})