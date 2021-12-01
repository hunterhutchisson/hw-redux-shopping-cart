import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_PRODUCT_QUANTITY } from "./types"

export const addToCart = (item) => {
    
    return {
        type: ADD_TO_CART,
        product: item
    }
}

export const deleteFromCart = (item) => {
    return {
        type: DELETE_FROM_CART,
        product: item
    }
}

export const changeQuantity = (item, quantityOfDress) => {
    return {
        type: CHANGE_PRODUCT_QUANTITY,
        product: item,
        quantity: quantityOfDress
    }
}


