import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import City from "../components/city";
import { CircularProgress } from "@material-ui/core/index";

const city = { isFetching: true, error: null, people: [] };

it('renders without crashing', () => {
    shallow(<City city={city} />);
});

it('renders CircularProgress', () => {
    const wrapper = shallow(<City city={city} />);
    expect(wrapper.contains(<CircularProgress/>)).toEqual(true);
});

it('do not renders CircularProgress', () => {
    const wrapper = shallow(<City city={{...city, isFetching: false}} />);
    expect(wrapper.contains(<CircularProgress/>)).toEqual(false);
});

it('renders error', () => {
    const errorText = 'Test error message'
    const wrapper = shallow(<City city={{...city, error: errorText}} />);
    const error = <div>{errorText}</div>
    expect(wrapper.contains(error)).toEqual(true);
});

it('do not renders error', () => {
    const errorText = 'Test error message'
    const wrapper = shallow(<City city={{...city, error: false}} />);
    const error = <div>{errorText}</div>
    expect(wrapper.contains(error)).toEqual(false);
});

it("renders elements from person object", () => {
  const people = [
    {
      id: 1,
      name: "Tobus Quickwhistle",
      thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      hair_color: "Pink"
    }
  ];
  const wrapper = mount(<City city={{ ...city, people }} />);
  const { id, name, age, hair_color } = people[0];
  expect(wrapper.contains(id)).toEqual(true);
  expect(wrapper.contains(name)).toEqual(true);
  expect(wrapper.contains(age)).toEqual(true);
  expect(wrapper.contains(hair_color)).toEqual(true);
});
