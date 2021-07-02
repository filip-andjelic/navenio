import React from 'react';
import { shallow } from 'enzyme';
import {Character} from "../services/api.interfaces";
import CharacterDetails from "../Components/CharacterDetails/CharacterDetails";

const CharacterData:Character = {
    name: 'Luke Skywalker',
    gender: 'male',
    birth_year: '19BBY',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    homeworld: "https://swapi.dev/api/planets/1/",
    films: ["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/6/"],
    species: [],
    vehicles: ["https://swapi.dev/api/vehicles/14/","https://swapi.dev/api/vehicles/30/"],
    starships: ["https://swapi.dev/api/starships/12/","https://swapi.dev/api/starships/22/"],
    created: '2014-12-09T13:50:51.644000Z',
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/",
};

test('Character list component renders correctly', () => {
    const component = shallow(<CharacterDetails character={CharacterData} />);

    // Check that wrapper renders correctly
    expect(component.hasClass("character-details")).toBe(true);
    // Gender value render check
    expect(component.find('.gender-label').text()).toEqual(CharacterData.gender);
    // Birth value render check
    expect(component.find('.birth-label').text()).toEqual(CharacterData.birth_year);
    // Height value render check
    expect(component.find('.height-label').text()).toEqual(CharacterData.height);
    // Mass value render check
    expect(component.find('.mass-label').text()).toEqual(CharacterData.mass);
    // Hair value render check
    expect(component.find('.hair-label').text()).toEqual(CharacterData.hair_color);
});
