import types from "./phonebook-types";
import { combineReducers } from "redux";

const formReducer = (state = { name: "", number: "" }, { type, payload }) => {
  switch (type) {
    case types.NAME:
      return {
        ...state,
        name: payload,
      };
    case types.NUMBER:
      return {
        ...state,
        number: payload,
      };

    default:
      return state;
  }
};
const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.SUBMIT: {
      if (state.find((el) => el.name === payload.name)) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
      return [...state, payload];
    }

    case types.DELETE:
      return state.filter((unit) => unit.name !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = { query: "" }, { type, payload }) => {
  switch (type) {
    case types.FILTER_QUERY:
      return {
        ...state,
        query: payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  contacts: contactReducer,
  filter: filterReducer,
});
