import { createSelector } from "reselect";

// input selector
const selectCart = (state) => {
    return(state.cart)
}

// output selector for cart Items
const selectCartItems = createSelector([selectCart], (cart) => {
    return(cart.cartItems);
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