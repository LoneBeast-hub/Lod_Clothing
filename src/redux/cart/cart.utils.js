export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check for an existing cart item
    const existingCartItems = cartItems.find((cartItem) => {
        return(cartItem.id === cartItemToAdd.id);
    })

    // if there's an existing cart item
    if(existingCartItems) {
        return cartItems.map((cartItem) => {
            return(
                // return a new object with the previous properties and a new one to show the quantity
                cartItem.id === cartItemToAdd.id? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        })
    }

    // return an array with a quantity property in its object having a base value of 1
    return([...cartItems, { ...cartItemToAdd, quantity: 1 }])
}