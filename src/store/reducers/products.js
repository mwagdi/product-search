import { RECEIVE_PRODUCTS } from '../types';

export const productsReducer = (state=[],action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
    
        default:
            return state;
    }
}