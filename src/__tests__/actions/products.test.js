import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchProducts,receiveProducts } from '../../store/actions';
import { FETCH_PRODUCTS,RECEIVE_PRODUCTS } from '../../store/types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Product actions', () => {
    test('receiveProducts dispatches action', () => {
        const products = [
            {
                title: "Product 1",
                gtin: "product1"
            },
            {
                title: "Product 2",
                gtin: "product2"
            }
        ]
        const expectedAction = {
            type: RECEIVE_PRODUCTS,
            products
        }
        expect(receiveProducts(products)).toEqual(expectedAction);
    })
    test('Dispatches products list when csv string is parsed', () => {
        const csvString = `title,gtin,gender,sale_price,price,image_link,additional_image_link
        Example Title,gtinExample,female,39.95 EUR,39.95 EUR,image_example,"image_example_1, image_example_2, image_example_3"`;
        
        const expectedActions = [
            { type: FETCH_PRODUCTS },
            { 
                type: RECEIVE_PRODUCTS,
                products: [
                    {
                        additional_image_link: "image_example_1, image_example_2, image_example_3",
                        gender: "female",
                        gtin: "gtinExample",
                        image_link: "image_example",
                        price: "39.95 EUR",
                        sale_price: "39.95 EUR",
                        title: "Example Title"
                    }
                ]
            } 
        ]
        const store = mockStore({ products: [] })
        
        async function mockProductsFetch(){
            await store.dispatch(fetchProducts(csvString));
            expect(store.getActions()).toEqual(expectedActions);
        }
        mockProductsFetch();
    })
})