import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import City from '../components/city';
import { CircularProgress } from "@material-ui/core/index";

const city = {isFetching: true, error: null, people: [] }

it('renders without crashing', () => {
    shallow(<City city={city} />);
});

it('renders CircularProgress', () => {
    const wrapper = shallow(<City city={city} />);
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(<CircularProgress/>)).toEqual(true);
});
