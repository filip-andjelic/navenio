import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Components/Header/Header';

test('Header component renders correctly', () => {
    const component = shallow(<Header />);

    expect(component.hasClass("app-header")).toBe(true);
    expect(component.find('.title')).toHaveLength(1);
});
