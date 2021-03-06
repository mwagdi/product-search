import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from './../App';

describe("App component", () => {
    test('Renders App component', () => {
      const wrapper = shallow(<App />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
})