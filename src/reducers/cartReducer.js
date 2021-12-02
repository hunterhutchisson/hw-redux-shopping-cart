import { changeQuantity } from "../actions/cartActions";
import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_PRODUCT_QUANTITY, ADD_TO_SAVED, DELETE_FROM_SAVED, MOVE_TO_CART, MOVE_TO_SAVED } from "../actions/types";

const cartReducer = (state, action) => {
    if(state === undefined){
        state = {
            cartItems: [],
            numberOfItems: 0,
            totalCost: parseFloat(0.00),
            savedItems: []
        }
    }
    switch(action.type){
        case ADD_TO_CART:
            //add new item to cartItems
            //update numOfItems
            //update totalCost
            action.product.quantity = 1
            return {
                ...state,
                cartItems: [...state.cartItems, action.product],
                numberOfItems: state.numberOfItems + 1,
                totalCost: state.totalCost + parseFloat(action.product.price * action.product.quantity)
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item=> item.id !== action.product.id),
                numberOfItems: state.numberOfItems-action.product.quantity,
                totalCost: state.totalCost - parseFloat(action.product.price*action.product.quantity)
            }
        case CHANGE_PRODUCT_QUANTITY:
            action.product.quantity = action.quantity
            let newCost = 0
            let newNumber = 0
            let newCartItems = state.cartItems.map(item=>{
                if(item.id === action.product.id){
                    newCost += (action.product.price * action.quantity)
                    newNumber += action.quantity
                    return action.product
                }
                newCost += (item.price * item.quantity)
                newNumber += item.quantity
                return item
            })
            return {
                ...state,
                cartItems: newCartItems,
                numberOfItems: newNumber,
                totalCost: newCost
            }
        case ADD_TO_SAVED:
            if((state.cartItems.findIndex(item=>item.id === action.product.id)) >= 0){
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    savedItems: [...state.savedItems, action.product]
                }
            }
        case DELETE_FROM_SAVED:
            return {
                ...state,
                savedItems: state.savedItems.filter(item=> item.id !== action.product.id)
            }
        case MOVE_TO_CART:
            action.product.quantity = 1
            return {
                ...state,
                cartItems: [...state.cartItems, action.product],
                numberOfItems: state.numberOfItems + 1,
                totalCost: state.totalCost + parseFloat(action.product.price*action.product.quantity),
                savedItems: state.savedItems.filter(item=> item.id !== action.product.id)
            }
        case MOVE_TO_SAVED:
            return {
                ...state,
                cartItems: state.cartItems.filter(item=> item.id !== action.product.id),
                numberOfItems: state.numberOfItems - action.product.quantity,
                totalCost: state.totalCost - parseFloat(action.product.price * action.product.quantity),
                savedItems: [...state.savedItems, action.product]
            }
        default:
            return state
    }
}

export default cartReducer