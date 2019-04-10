import { productsReducer } from '../../store/reducers/products'; 
import { RECEIVE_PRODUCTS } from '../../store/types';

describe('products reducer', () => {
  test('should return the initial state', () => {
    expect(productsReducer(undefined, {})).toEqual([])
  })

  test('should handle RECEIVE_PRODUCTS', () => {
    expect(productsReducer(undefined, {
        type: RECEIVE_PRODUCTS,
        products: [
            {
                title: "Product 1",
                gtin: "product1"
            },
            {
                title: "Product 2",
                gtin: "product2"
            }
        ]
    })).toEqual([
        {
            title: "Product 1",
            gtin: "product1"
        },
        {
            title: "Product 2",
            gtin: "product2"
        }
    ])
  })
  
})