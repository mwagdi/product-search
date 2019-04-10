import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ProductContainer from '../../containers/ProductContainer';
import { Provider } from 'react-redux';

describe("Product Container", () => {
    let wrapper;
    const mockStore = configureStore();
    let store;
    
    beforeEach(() => {
        store = mockStore({})
        wrapper = shallow(<Provider store={store}><ProductContainer /></Provider>);
        
    })

    test('Renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
})