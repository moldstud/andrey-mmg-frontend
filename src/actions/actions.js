import { SUCCESS, ERROR, STARTED, FETCH_CITY } from "./types";

const CITY = "Brastlewark";

const URL_FOR_CITY =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

function fetchCityStarted() {
  return {
    type: `${FETCH_CITY}${STARTED}`
  };
}

function fetchCityError(error) {
  return {
    type: `${FETCH_CITY}${ERROR}`,
    error
  };
}

function fetchCitySuccess(people) {
  return {
    type: `${FETCH_CITY}${SUCCESS}`,
    people
  };
}

export const fetchCity = () => async dispatch => {
  dispatch(fetchCityStarted());
  try {
    const response = await fetch(URL_FOR_CITY);
    if (response.ok) {
      const cities = await response.json();
      const people = cities[CITY];
      dispatch(fetchCitySuccess(people));
    }
  } catch (e) {
    console.log(e);
    dispatch(fetchCityError(e.message));
  }
};
