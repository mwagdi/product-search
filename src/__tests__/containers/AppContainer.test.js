import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import AppContainer from '../../containers/AppContainer';
import { Provider } from 'react-redux';

describe("App Container", () => {
    let wrapper;
    const mockStore = configureStore();
    let store;
    const initialState = {
        products: []
    }
    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = shallow(<Provider store={store}><AppContainer /></Provider>);
        
    })

    test('Renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
})