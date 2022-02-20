import phonebookReducer from "./phonebook/phonebook-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

export default store;
