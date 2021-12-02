import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_PRODUCT_QUANTITY, ADD_TO_SAVED, DELETE_FROM_SAVED, MOVE_TO_CART, MOVE_TO_SAVED } from "./types"

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

export const addToSaved = (item) => {
    return {
        type: ADD_TO_SAVED,
        product: item
    }
}

export const deleteFromSaved = (item) => {
    return {
        type: DELETE_FROM_SAVED,
        product: item
    }
}

export const moveToCart = (item) => {
    return {
        type: MOVE_TO_CART,
        product: item
    }
}

export const moveToSaved = (item) => {
    return {
        type: MOVE_TO_SAVED,
        product: item
    }
}