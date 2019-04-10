import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Gallery from '../../components/Gallery';

describe("Gallery component", () => {
    test('Renders Gallery component', () => {
        const images = [
            "dummy.jpg",
            "dummy1.jpg",
            "dummy2.jpg",
            "dummy3.jpg",
        ]
        const wrapper = shallow(<Gallery images={images} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
})