import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Modal from '../../components/Modal';

describe("Modal component", () => {
    test('Renders Modal component', () => {
        const product = {
            title: "Product Title",
            additional_image_link: "*****,*****,*****"
        }
        const wrapper = shallow(<Modal product={product} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
})