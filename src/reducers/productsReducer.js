import { LOAD_PRODUCTS } from "../actions/types";

const productsReducer = (state, action) => {
    if(state === undefined){
        state = {
            products: []
        }
    }
    switch(action.type){
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
    
}

export default productsReducer