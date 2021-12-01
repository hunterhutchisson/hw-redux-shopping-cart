import products from '../assets/data';
import {LOAD_PRODUCTS} from './types'

export const loadProducts = () => {
    return {
        type: LOAD_PRODUCTS,
        products
    }
}
