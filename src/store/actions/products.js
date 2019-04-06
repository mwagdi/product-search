import { parse } from 'papaparse';

import { FETCH_PRODUCTS,RECEIVE_PRODUCTS } from '../types';

const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}

export const fetchProducts = csvString => {
    return dispatch => {
        parse(csvString, {
            header: true,
            complete: ({ data }) => {
                dispatch(receiveProducts(data));
            }
        });
    }
}