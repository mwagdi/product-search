import { combineReducers } from 'redux';

import { productsReducer } from './products';
import modal from './modal';

export default combineReducers({
    products: productsReducer,
    modal
})