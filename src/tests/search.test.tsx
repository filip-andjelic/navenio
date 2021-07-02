import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from '../Components/SearchComponent/SearchComponent';

test('Search component renders correctly', (done) => {
    const searchValue = 'Luke';
    const handleSearch = (search: string) => {
        expect(search).toEqual(searchValue);

        done();
    };
    const component = shallow(<SearchComponent handleSearch={handleSearch} />);

    // Check if component renders wrapper correctly
    expect(component.hasClass("search-component")).toBe(true);
    // Check if component renders submit button
    expect(component.find('button[type="button"]')).toHaveLength(1);
    // Check if component renders input button
    expect(component.find('input[type="text"]')).toHaveLength(1);
    // Check whether clicking a button triggers search callback with correct input value
    component.find('input[type="text"]')
        .simulate('change', { target: { value: searchValue } });
    component.find('button[type="button"]').simulate('click');
});
