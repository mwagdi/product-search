import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ModalContainer from '../../containers/ModalContainer';
import { Provider } from 'react-redux';

describe("Modal Container", () => {
    let wrapper;
    const mockStore = configureStore();
    let store;
    const initialState = {
        product: {
            title: "Product Title",
            additional_image_link: "dummy1.jpg,dummy2.jpg"
        }
    }
    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = shallow(<Provider store={store}><ModalContainer /></Provider>);
        
    })

    test('Renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
})