import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import phonebookActions from "./phonebook-actions";

const contactReducer = createReducer([], {
  [phonebookActions.submitValue]: (state, { payload }) => {
    if (state.find((el) => el.name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [...state, payload];
  },
  [phonebookActions.deleteValue]: (state, { payload }) =>
    state.filter((unit) => unit.name !== payload),
});

const filterReducer = createReducer(
  { query: "" },
  {
    [phonebookActions.setFilterQuery]: (state, { payload }) => ({
      ...state,
      query: payload,
    }),
  }
);

const formReducer = createReducer(
  { name: "", number: "" },
  {
    [phonebookActions.setNameValue]: (state, { payload }) => ({
      ...state,
      name: payload,
    }),
    [phonebookActions.setNumberValue]: (state, { payload }) => ({
      ...state,
      number: payload,
    }),
  }
);

export default combineReducers({
  form: formReducer,
  contacts: contactReducer,
  filter: filterReducer,
});
