import { combineReducers } from "redux";
import productsReducer from './productsReducer';
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    prodCRD: productsReducer,
    cartCRD: cartReducer
})

export default rootReducer