import types from "./phonebook-types";
import { createAction, nanoid } from "@reduxjs/toolkit";

const setFilterQuery = createAction(types.FILTER_QUERY);
const setNameValue = createAction(types.NAME);
const setNumberValue = createAction(types.NUMBER);
const deleteValue = createAction(types.DELETE);
const submitValue = createAction(types.SUBMIT, (data) => ({
  payload: { name: data[0].toLowerCase(), number: data[1], id: nanoid() },
}));

const phonebookActions = {
  setFilterQuery,
  setNameValue,
  setNumberValue,
  submitValue,
  deleteValue,
};
export default phonebookActions;
