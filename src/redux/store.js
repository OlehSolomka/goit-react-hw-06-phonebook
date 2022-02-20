import { createStore, combineReducers } from "redux";
import phonebookReducer from "./phonebook/phonebook-reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
