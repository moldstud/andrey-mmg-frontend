import { FETCH_CITY, ERROR, STARTED, SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  people: [],
  error: null
};

export default function city(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${FETCH_CITY}${STARTED}`:
      return { ...state, isFetching: true, error: null };
    case `${FETCH_CITY}${SUCCESS}`:
      return {
        ...state,
        isFetching: false,
        people: action.people
      };
    case `${FETCH_CITY}${ERROR}`:
      return { ...INITIAL_STATE, error: action.error };
    default:
      return state;
  }
}
