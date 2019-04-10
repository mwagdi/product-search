import { parse } from 'papaparse';

import { FETCH_PRODUCTS,RECEIVE_PRODUCTS } from '../types';
import { ltrim } from './../../helpers';

export const receiveProducts = products => {
    products[0].title = ltrim(products[0].title);
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}

export const fetchProducts = csvString => {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS
        })
        parse(csvString, {
            header: true,
            complete: ({ data }) => {
                dispatch(receiveProducts(data));
            }
        });
    }
}