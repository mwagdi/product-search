import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Product from '../../components/Product';

describe("Product component", () => {
    test('Renders Product component', () => {
        const product = {
            title: "Product Title",
            gtin: "gtinExample",
            gender: "female",
            price: "39.95 EUR",
            sale_price: "39.95 EUR",
            image_link: "dummy.jpg",
            additional_image_link: "*****,*****,*****"
        }
        const wrapper = shallow(<Product product={product} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
})