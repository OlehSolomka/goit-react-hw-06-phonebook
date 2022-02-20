import types from "./phonebook-types";
import { nanoid } from "nanoid/non-secure";

const setFilterQuery = (query) => ({
  type: types.FILTER_QUERY,
  payload: query,
});

const setNameValue = (name) => ({
  type: types.NAME,
  payload: name,
});
const setNumberValue = (number) => ({
  type: types.NUMBER,
  payload: number,
});
const submitValue = (data) => ({
  type: types.SUBMIT,
  payload: { name: data[0].toLowerCase(), number: data[1], id: nanoid() },
});
const deleteValue = (name) => ({
  type: types.DELETE,
  payload: name,
});

const phonebookActions = {
  setFilterQuery,
  setNameValue,
  setNumberValue,
  submitValue,
  deleteValue,
};
export default phonebookActions;
