import { changeQuantity } from "../actions/cartActions";
import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_PRODUCT_QUANTITY } from "../actions/types";

const cartReducer = (state, action) => {
    if(state === undefined){
        state = {
            cartItems: [],
            numberOfItems: 0,
            totalCost: parseFloat(0.00),
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
                numberOfItems: state.numberOfItems+1,
                totalCost: state.totalCost + parseFloat(action.product.price*action.product.quantity)
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
            console.log(newCartItems)
            return {
                ...state,
                cartItems: newCartItems,
                numberOfItems: newNumber,
                totalCost: newCost
            }
        default:
            return state
    }
}

export default cartReducer